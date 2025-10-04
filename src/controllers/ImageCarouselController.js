import ImageSlides from "../models/ImageSlides";

function ImageCarouselController(){
  const backBtn = document.querySelector('#left');
  const forwardBtn = document.querySelector('#right');
  const imageContainer = document.querySelector('#imageContainer');
  const IMAGE_COUNT = 3;

  let imageIndex = 1;
  
  backBtn.addEventListener('click', () => {
    resetImages();
    if (imageIndex > 1) {
      imageIndex -= 1;
    }

    const image = document.getElementById(`image${imageIndex}`);
    image.style.display = 'block';
  });

  forwardBtn.addEventListener('click', () => {
    resetImages();
    if (imageIndex < IMAGE_COUNT) {
      imageIndex += 1;
    }

    const image = document.getElementById(`image${imageIndex}`);
    image.style.display = 'block';
  });
  
  function resetImages() {
    const allImages = document.querySelectorAll('#imageContainer > img');
    allImages.forEach(image => {
      image.style.display = 'none';
    });
  }
}

export default ImageCarouselController;