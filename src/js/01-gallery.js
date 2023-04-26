import { galleryItems } from './gallery-items.js';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

//-------------- Creo arrays del array de objetos para modificar más facilmente con su index --------------//
let urlPrev = [];
let urlOpen = [];
let altImg = [];

galleryItems.map(item => {
  // Agregar cada propiedad al array correspondiente
  urlPrev.push(item.preview);
  urlOpen.push(item.original);
  altImg.push(item.description);
});

const gallery = document.querySelector('.gallery');

// ------------ Crear lis html de el arreglo galleryItems-------------//

function createGallery(items) {
  const itemsList = items
    .map(
      image =>
        `<li  class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" alt="${image.description}"/></a></li>`
    )
    .join('');

  return itemsList;
}

gallery.innerHTML = createGallery(galleryItems);

// -------------------------------------------------------------------//
// ------------ Función abrir img modal con SimpleLightbox ------------//

gallery.addEventListener('click', event => {
  event.preventDefault();
});

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});