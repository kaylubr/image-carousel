class ImageCarousel {
  static #IMAGE_COUNT = 3;
  static #imageIndex = 0;
  
  static handleBackClick() {
    ImageCarousel.#imageIndex -= 1;

    if (ImageCarousel.#imageIndex < 0) {
      ImageCarousel.#imageIndex = 0;
    }

   ImageCarousel.#renderImage();
    ImageCarousel.handleNavDots();
  }

  static handleForwardClick() {
    ImageCarousel.#resetImages();
    ImageCarousel.#imageIndex += 1;

    if (ImageCarousel.#imageIndex >= ImageCarousel.#IMAGE_COUNT) {
      ImageCarousel.#imageIndex -= 1;
    }

    ImageCarousel.#renderImage();
    ImageCarousel.handleNavDots();
  }

  static handleNavDotsClick(index) {
    ImageCarousel.#imageIndex = index;
    ImageCarousel.#renderImage();
    ImageCarousel.handleNavDots();
  }

  static handleNavDots() {
    ImageCarousel.#resetNavDots();
    const currentDot = document.querySelector(`#nav${ImageCarousel.#imageIndex}`);
    currentDot.style.backgroundColor = '#3e3e3e';
  }
  
  static #resetImages() {
    const allImages = document.querySelectorAll('#imageContainer > img');
    allImages.forEach(image => {
      image.style.display = 'none';
    });
  }

  static #resetNavDots() {
    const allDots = document.querySelectorAll('#imgNav > span');
    allDots.forEach(dots => dots.style.backgroundColor = '#cacaca');
  }
  
  static #renderImage() {
    ImageCarousel.#resetImages();
    const image = document.getElementById(`image${ImageCarousel.#imageIndex}`);
    image.style.display = 'block';
  }

  static initialRender() {
    const image = document.getElementById(`image0`);
    const firstNavDot = document.querySelector('#imgNav > span:first-of-type');
    image.style.display = 'block';
    firstNavDot.style.backgroundColor = '#3e3e3e';
  }
}

export default ImageCarousel;