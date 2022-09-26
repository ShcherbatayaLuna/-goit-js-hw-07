import { galleryItems } from './gallery-items.js';

const containerGallery = document.querySelector('.gallery');

const cardsMarkup = createCardsImageMarkup(galleryItems);

function createCardsImageMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
          </a>
        </div>`;
    })
    .join('');
}

containerGallery.insertAdjacentHTML('beforeend', cardsMarkup);
// containerGallery.innerHTML = cardsMarkup;

containerGallery.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  openInFullImage(event);
});

function openInFullImage(event) {
  const imageSourceEl = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${imageSourceEl}" width="800" height="600">`,
  );

  instance.show();

  closeInFullImage(instance);
}

function closeInFullImage(instance) {
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      instance.close();
      window.removeEventListener();
    }
  });
}
