const photos = [...document.querySelectorAll('[data-photo]')];
const dialog = document.querySelector('dialog');
let current = 0;
function showPhoto(index) {
  current = (index + photos.length) % photos.length;
  const source = photos[current].querySelector('img');
  const caption = photos[current].closest('figure').querySelector('figcaption');
  const large = document.querySelector('#large');
  large.src = photos[current].dataset.photo;
  large.alt = source.alt;
  document.querySelector('#caption').replaceChildren(...Array.from(caption.childNodes, node => node.cloneNode(true)));
}
photos.forEach((button, index) => button.addEventListener('click', () => {
  showPhoto(index);
  dialog.showModal();
  document.body.classList.add('viewer-open');
  document.querySelector('#close').focus();
}));
document.querySelector('#close').addEventListener('click', () => dialog.close());
document.querySelector('#prev').addEventListener('click', () => showPhoto(current - 1));
document.querySelector('#next').addEventListener('click', () => showPhoto(current + 1));
dialog.addEventListener('close', () => document.body.classList.remove('viewer-open'));
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showPhoto(current + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
