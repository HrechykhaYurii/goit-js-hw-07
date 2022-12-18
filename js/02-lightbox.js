import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const list = document.querySelector('.gallery');
const listImages = createImagesMarkup(galleryItems);

list.insertAdjacentHTML("afterbegin", listImages);
list.addEventListener('click',onGalleryImageClick)

function createImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => 
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});


function onGalleryImageClick(event){
event.preventDefault();

lightbox.on('show.simplelightbox',);

};

