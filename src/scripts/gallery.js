const links = [...document.querySelectorAll('[data-photo]')];
const dialog = document.querySelector('#lightbox');
const image = document.querySelector('#large-photo');
const caption = document.querySelector('#photo-caption');
const counter = document.querySelector('#photo-counter');
let current = 0;
let opener;
let touchStart;

function show(index) {
  current = (index + links.length) % links.length;
  const link = links[current];
  const alt = link.querySelector('img').alt;
  image.src = link.href;
  image.alt = alt;
  caption.textContent = alt;
  counter.textContent = `${current + 1} / ${links.length}`;
}

if (dialog && typeof dialog.showModal === 'function') {
  links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      show(index);
      dialog.showModal();
      document.documentElement.classList.add('gallery-open');
    });
  });
  document.querySelector('#close-lightbox').addEventListener('click', () => dialog.close());
  document.querySelector('#previous-photo').addEventListener('click', () => show(current - 1));
  document.querySelector('#next-photo').addEventListener('click', () => show(current + 1));
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('gallery-open');
    opener?.focus({ preventScroll: true });
  });
  image.addEventListener('touchstart', (event) => { touchStart = event.touches.length === 1 ? event.touches[0] : undefined; }, { passive: true });
  image.addEventListener('touchend', (event) => {
    if (!touchStart) return;
    const dx = event.changedTouches[0].clientX - touchStart.clientX;
    const dy = event.changedTouches[0].clientY - touchStart.clientY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) show(current + (dx < 0 ? 1 : -1));
    touchStart = undefined;
  }, { passive: true });
  image.addEventListener('touchcancel', () => { touchStart = undefined; });
}
