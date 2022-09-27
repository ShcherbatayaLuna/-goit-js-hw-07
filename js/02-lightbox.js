import { galleryItems } from './gallery-items.js';

const containerGallery = document.querySelector('.gallery');

const cardsMarkup = createCardsImageMarkup(galleryItems);

containerGallery.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsImageMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
          <a class="gallery__item" href="${original}" data-lightbox="images" data-title="${description}">
              <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
          </a>
          </li>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});
