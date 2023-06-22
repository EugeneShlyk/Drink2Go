import { toggleMenuHandler } from './menu.js';
import { addNoUiSlider } from './range-slider.js';

toggleMenuHandler();
addNoUiSlider();

new Swiper('.image-slider', {

  navigation: {
    nextEl: '.image-slider__button-next',
    prevEl: '.image-slider__button-prev'
  },

  pagination: {
    el: '.swiper-pagination',

    clickable: true,

  }
});
