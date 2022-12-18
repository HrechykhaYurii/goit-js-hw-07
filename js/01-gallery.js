import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');
const listImages = createImagesMarkup(galleryItems);

list.insertAdjacentHTML("afterbegin", listImages);

list.addEventListener('click',onGalleryImageClick)

function createImagesMarkup(galleryItems) {
return  galleryItems.map(({ preview, original, description }) => 
`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join('');
}


function onGalleryImageClick(event){
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const modalImage = basicLightbox.create(`      
  <img src="${event.target.dataset.source}" width="800" height="600">  `,
    {
      onShow: modalImage => { document.addEventListener('keydown', onEscapeKeyDown); },
      onClose: modalImage => { document.removeEventListener('keydown', onEscapeKeyDown); },
    });
  modalImage.show();

  function onEscapeKeyDown(event) {
    if (event.code !== 'Escape') {
       return;
  }
  modalImage.close();
  }
};

