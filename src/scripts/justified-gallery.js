import $ from 'jquery';
import installJustifiedGallery from 'justifiedGallery';
import 'justifiedGallery/dist/css/justifiedGallery.css';

installJustifiedGallery(window, $);
const gallery = document.querySelector('.photo-grid');

if (gallery && gallery.children.length) {
  const $gallery = $(gallery);
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
