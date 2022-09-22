import { galleryItems } from './gallery-items.js';

// Change code below this line

const containerGallery = document.querySelector('.gallery');

const cardsMarkup = createCardsImageMarkup(galleryItems);

containerGallery.insertAdjacentHTML('beforeend', cardsMarkup);

containerGallery.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  openInFullImage(event);
});

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

function openInFullImage(event) {
  const imageSourceEl = event.target.getAttribute('data-source');

  const instance = basicLightbox.create(
    `<img src="${imageSourceEl}" width="800" height="600">`,
  );

  instance.show();

  closeInFullImage(instance);
}

function closeInFullImage(instance) {
  containerGallery.addEventListener('keydown', event => {
    console.log(event.key);
    if (event.key === 'Escape') {
      instance.close();
    }
  });
}
