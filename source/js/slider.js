const workSlider = () => {
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
}

export { workSlider };
