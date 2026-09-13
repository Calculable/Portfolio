import $ from 'jquery';
import installJustifiedGallery from 'justifiedGallery';
import 'justifiedGallery/dist/css/justifiedGallery.css';

installJustifiedGallery(window, $);
const gallery = document.querySelector('.photo-grid');

if (gallery && gallery.children.length) {
  const $gallery = $(gallery);
  // Give the layout engine dimensions directly. Its normal "skipped" loading
  // path still preloads every fallback src with new Image(), bypassing native
  // lazy loading and srcset. These entries are layout-ready, not network-loaded.
  for (const link of gallery.querySelectorAll('[data-photo]')) {
    const image = link.querySelector('img');
    $(link).data('jg.width', Number(image.getAttribute('width')))
      .data('jg.height', Number(image.getAttribute('height')))
      .data('jg.loaded', true)
      .addClass('jg-entry-visible');
  }
  const options = () => ({
    rowHeight: gallery.clientWidth < 600 ? 160 : 300,
    margins: gallery.clientWidth < 600 ? 8 : 16,
    border: 0,
    lastRow: 'nojustify',
    captions: false,
    randomize: false,
    waitThumbnailsLoad: false,
    // Astro supplies responsive srcsets; do not rewrite image filenames.
    sizeRangeSuffixes: {},
    cssAnimation: false,
    imagesAnimationDuration: 0,
  });
  const deferred = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const image = entry.target.querySelector('img');
      image.srcset = image.dataset.srcset;
      image.src = image.dataset.src;
      delete image.dataset.src;
      delete image.dataset.srcset;
      deferred.unobserve(entry.target);
    }
  }, { rootMargin: '600px 0px' });
  let observing = false;
  // Use the actual row width to select an appropriate Astro image variant.
  $gallery.on('jg.complete jg.resize', () => {
    for (const link of gallery.querySelectorAll('[data-photo]')) {
      link.querySelector('img').sizes = `${Math.ceil(link.getBoundingClientRect().width)}px`;
    }
    // Wait until rows have positions; before layout all absolute entries
    // briefly overlap at the top, which defeats native lazy loading.
    if (!observing) {
      observing = true;
      gallery.querySelectorAll('[data-photo]').forEach(link => {
        if (link.querySelector('img').dataset.src) deferred.observe(link);
      });
    }
  });
  $gallery.justifiedGallery(options());
  let lastWidth = gallery.clientWidth;
  const resize = new ResizeObserver(() => {
    const width = gallery.clientWidth;
    if (width !== lastWidth) {
      lastWidth = width;
      $gallery.justifiedGallery(options());
    }
  });
  resize.observe(gallery);
}
