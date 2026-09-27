/** Search is local; neither queries nor coordinates leave the browser. */
export function normalizeName(value) {
  return String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('de-CH').replace(/ß/g, 'ss');
}
export function displayName(record) { return record.name || 'Unbenannter Wasserfall'; }
export function searchWaterfalls(records, query, includeUnnamed = false) {
  const terms = normalizeName(query).trim().split(/\s+/).filter(Boolean);
  return records.filter((record) => {
    if (!includeUnnamed && !record.name) return false;
    const text = normalizeName([record.name, ...Object.values(record.names || {}), ...(record.aliases || [])].join(' '));
    return terms.every((term) => text.includes(term));
  }).sort((a, b) => Number(!a.name) - Number(!b.name) || displayName(a).localeCompare(displayName(b), 'de-CH') || a.id.localeCompare(b.id));
}
export function externalLinks(record) {
  const coordinate = `${record.lat},${record.lon}`;
  const links = [
    ['Google Maps', `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(coordinate)}`],
    ['Apple Karten', `https://maps.apple.com/?ll=${encodeURIComponent(coordinate)}&q=${encodeURIComponent(displayName(record))}`],
    ['OpenStreetMap', `https://www.openstreetmap.org/${record.osmType}/${record.osmID}`],
  ];
  if (/^Q[1-9][0-9]*$/.test(record.wikidata || '')) links.push(['Wikidata', `https://www.wikidata.org/wiki/${record.wikidata}`]);
  const wikipedia = /^([a-z-]+):(.+)$/i.exec(record.wikipedia || '');
  if (wikipedia) links.push(['Wikipedia', `https://${wikipedia[1].toLowerCase()}.wikipedia.org/wiki/${encodeURIComponent(wikipedia[2].replace(/ /g, '_'))}`]);
  return links;
}
