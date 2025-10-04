import ImageCarousel from './controllers/ImageCarouselController';
import './style.css';

const forwardBtn = document.querySelector('#right');
const backBtn = document.querySelector('#left');
const navDots = document.querySelectorAll('#imgNav > span');

// Navigation
backBtn.addEventListener('click', () => ImageCarousel.handleBackClick());
forwardBtn.addEventListener('click', () => ImageCarousel.handleForwardClick());
navDots.forEach(nav => {
  nav.addEventListener('click', event => {
    const index = parseInt(event.target.id.slice(3));
    ImageCarousel.handleNavDotsClick(index);
  });
})

// Runs initial render of the page
document.addEventListener('DOMContentLoaded', () => {
  ImageCarousel.initialRender();
})

