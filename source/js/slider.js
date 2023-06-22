const sliderImages = document.querySelectorAll('.slider-pagination__item'),
  sliderLine = document.querySelector('.slider-pagination__list'),
  sliderDots = document.querySelectorAll('.slider-pagination__item-button'),
  sliderButtonPrev = document.querySelector('.slider__button-prev'),
  sliderButtonNext = document.querySelector('.slider__button-next');

let sliderCount = 0,
  sliderWidth;

// задает шаг перемещения слайдов
const rollSlider = () => {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
};

// Задаёт нужную ширину картинке и slideLine
const showSlide = () => {
  sliderWidth = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
  sliderImages.forEach(item =>
    item.style.width = sliderWidth + 'px'
  );
  rollSlider();
};

showSlide();

// адаптивность слайдера
window.addEventListener('resize', showSlide);



const thisSlide = (index) => {
  sliderDots.forEach(item => item.classList.remove('slider-pagination__item-button--active'));
  sliderDots[index].classList.add('slider-pagination__item-button--active');
}

// перелистывает слайд вперед
const nextSlide = () => {
  sliderCount++;
  if (sliderCount >= sliderImages.length) {
    sliderCount = 0;
  }

  rollSlider();
  thisSlide(sliderCount);
};

// перелистывает слайд назад
const prevSlide = () => {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = sliderImages.length - 1;
  }

  rollSlider();
  thisSlide(sliderCount);
};

// кнопки перелистывания слайдов вперёд и назад
sliderButtonNext.addEventListener('click', nextSlide);
sliderButtonPrev.addEventListener('click', prevSlide);

sliderDots.forEach((dot,index) => {
  dot.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  })
})

// автоматическое перелистывание слайдов
setInterval(() => {
  nextSlide()
}, 10000);

