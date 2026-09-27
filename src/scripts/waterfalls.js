import { displayName, searchWaterfalls, externalLinks } from '../lib/waterfall-data.js';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';

const root = document.querySelector('[data-waterfall-directory]');
if (root) {
  const $ = (id) => root.querySelector(`#wf-${id}`);
  const records = JSON.parse($('data').textContent);
  const format = new Intl.NumberFormat('de-CH');
  let results = [], map, clusters, L, opener;
  let tileErrors = 0;
  const search = $('search'), unnamed = $('unnamed'), list = $('list'), dialog = $('detail');
  for (const element of [search, unnamed, $('load-map')]) element.disabled = false;

  function addFact(label, value) {
    const dt = document.createElement('dt'), dd = document.createElement('dd');
    dt.textContent = label; dd.textContent = value;
    $('detail-facts').append(dt, dd);
  }
  function openDetails(record, trigger) {
    opener = trigger instanceof HTMLElement ? trigger : document.activeElement;
    $('detail-title').textContent = displayName(record);
    $('detail-facts').replaceChildren();
    if (record.heightMeters != null) addFact('Höhe', `${format.format(record.heightMeters)} m (Quellenangabe)`);
    if (typeof record.intermittent === 'boolean') addFact('Wasserführung', record.intermittent ? 'Zeitweise wasserführend laut OSM; aktuell nicht geprüft' : 'Laut OSM nicht zeitweise; aktuelle Wasserführung unbekannt');
    addFact('Koordinaten', `${record.lat.toFixed(5)}, ${record.lon.toFixed(5)}`);
    if (record.positionKind !== 'node') addFact('Position', record.positionKind === 'manual' ? 'Manuell korrigierte Position; kein Zugangspunkt' : 'Ungefähre Mitte des erfassten Objekts; kein Zugangspunkt');
    if (record.access) addFact('Zugang', `OSM-Angabe: ${record.access}. Keine Bestätigung der aktuellen Zugänglichkeit.`);
    const aliases = [...new Set([...Object.values(record.names || {}), ...(record.aliases || [])])].filter((name) => name !== record.name);
    $('detail-names').hidden = !aliases.length;
    $('detail-names').open = false;
    $('detail-names').querySelector('summary').textContent = `Weitere Namen (${aliases.length})`;
    $('detail-names').querySelector('p').textContent = aliases.join(' · ');
    $('detail-links').replaceChildren();
    for (const [label, href] of externalLinks(record)) {
      const link = document.createElement('a');
      link.textContent = `${label} ↗`; link.href = href; link.target = '_blank'; link.rel = 'noopener noreferrer';
      $('detail-links').append(link);
    }
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('wf-dialog-open');
    $('close').focus();
  }
  function renderList() {
    const fragment = document.createDocumentFragment();
    for (const record of results) {
      const item = document.createElement('li'), button = document.createElement('button');
      button.type = 'button';
      const title = document.createElement('span'), meta = document.createElement('small'), arrow = document.createElement('span');
      title.textContent = displayName(record);
      meta.textContent = record.heightMeters ? `${format.format(record.heightMeters)} m Höhe` : record.name ? '' : `${record.lat.toFixed(3)}° N · ${record.lon.toFixed(3)}° E`;
      arrow.textContent = '↗'; arrow.className = 'wf-row-arrow'; arrow.setAttribute('aria-hidden', 'true');
      button.append(title);
      if (meta.textContent) button.append(meta);
      button.append(arrow);
      button.addEventListener('click', () => openDetails(record, button));
      item.append(button); fragment.append(item);
    }
    list.replaceChildren(fragment);
    list.scrollTop = 0;
    $('empty').hidden = results.length > 0;
    $('count').textContent = `${format.format(results.length)} ${results.length === 1 ? 'Wasserfall' : 'Wasserfälle'}`;
  }
  function renderMarkers(fit = false) {
    if (!map) return;
    clusters.clearLayers();
    const icon = L.divIcon({ className: 'wf-pin', html: '<span aria-hidden="true"></span>', iconSize: [24, 24], iconAnchor: [12, 12] });
    const all = results.map((record) => {
      const marker = L.marker([record.lat, record.lon], { icon, title: displayName(record), alt: displayName(record), keyboard: true });
      marker.on('click', () => openDetails(record, marker.getElement()));
      return marker;
    });
    clusters.addLayers(all);
    if (fit && results.length) map.fitBounds(clusters.getBounds(), { padding: [30, 30], maxZoom: 13, animate: false });
  }
  function filter() {
    results = searchWaterfalls(records, search.value, unnamed.checked);
    renderList(); renderMarkers(true);
  }
  search.addEventListener('input', filter);
  unnamed.addEventListener('change', filter);
  $('close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => { document.body.classList.remove('wf-dialog-open'); if (opener?.isConnected) opener.focus(); });
  $('load-map').addEventListener('click', async () => {
    const button = $('load-map'); button.disabled = true; button.textContent = 'Karte wird geladen …';
    try {
      const leaflet = await import('leaflet');
      L = leaflet.default || leaflet;
      window.L = L;
      await import('leaflet.markercluster');
      $('map').hidden = false;
      map = L.map($('map'), { scrollWheelZoom: false, tapHold: false }).setView([46.8, 8.23], 7);
      map.zoomControl.setPosition('topright');
      map.zoomControl._zoomInButton.title = 'Vergrössern'; map.zoomControl._zoomInButton.setAttribute('aria-label', 'Vergrössern');
      map.zoomControl._zoomOutButton.title = 'Verkleinern'; map.zoomControl._zoomOutButton.setAttribute('aria-label', 'Verkleinern');
      tileErrors = 0;
      // Standard OSM tiles: visible attribution, normal browser caching, no prefetch or offline downloads.
      const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, referrerPolicy: 'strict-origin-when-cross-origin',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>',
      });
      tiles.on('tileerror', () => {
        tileErrors++;
        if (tileErrors >= 2) { $('map-message').textContent = 'Die Hintergrundkarte ist derzeit teilweise nicht erreichbar. Liste und Details bleiben verfügbar.'; $('map-message').hidden = false; }
      });
      tiles.addTo(map);
      clusters = L.markerClusterGroup({ showCoverageOnHover: false, maxClusterRadius: 45, animate: !matchMedia('(prefers-reduced-motion: reduce)').matches,
        iconCreateFunction(cluster) {
          const count = cluster.getChildCount();
          return L.divIcon({ html: `<span>${count}</span>`, className: 'wf-cluster', iconSize: [42, 42] });
        },
      });
      map.addLayer(clusters);
      $('map-consent').hidden = true; $('map-actions').hidden = false;
      renderMarkers(true);
      $('map').focus({ preventScroll: true });
      $('map').scrollIntoView({ block: 'center', behavior: 'instant' });
    } catch (error) {
      if (map) map.remove(); map = null;
      $('map').hidden = true; $('map-consent').hidden = false;
      $('map-message').textContent = 'Die Karte konnte nicht geladen werden. Bitte versuche es nochmals. Die Liste bleibt nutzbar.';
      $('map-message').hidden = false;
    } finally { button.disabled = false; button.textContent = 'Karte laden'; }
  });
  $('fit-map').addEventListener('click', () => { if (map && results.length) map.fitBounds(clusters.getBounds(), { padding: [30, 30], maxZoom: 13 }); });
  filter();
}
