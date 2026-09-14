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
  // Use the actual row width to select an appropriate Astro image variant.
  $gallery.on('jg.complete jg.resize', () => {
    for (const link of gallery.querySelectorAll('[data-photo]')) {
      link.querySelector('img').sizes = `${Math.ceil(link.getBoundingClientRect().width)}px`;
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
