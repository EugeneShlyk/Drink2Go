let navigation = document.querySelector('.navigation');
let navigationToggle = navigation.querySelector('.navigation__button-menu');

navigation.classList.remove('navigation--nojs');

const toggleMenuHandler = () => {
  navigationToggle.addEventListener('click', function () {
    if (navigation.classList.contains('navigation--closed')) {
      navigation.classList.remove('navigation--closed');
      navigation.classList.add('navigation--opened');
    } else {
      navigation.classList.add('navigation--closed');
      navigation.classList.remove('navigation--opened');
    }
  });
}

export { toggleMenuHandler };
