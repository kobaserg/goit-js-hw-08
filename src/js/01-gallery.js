// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const onCreateGallery = item => {
  return `<li > 
<a class="gallery__item gallery__link" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</li>`;
};

const marcup = galleryItems.map(onCreateGallery).join('');

gallery.insertAdjacentHTML('afterbegin', marcup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionDelay: 250,
  widthRatio: 0.7,
  heightRatio: 0.8,
  scrollZoomFactor: 0.1,
});
