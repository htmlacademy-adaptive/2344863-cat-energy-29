let navMain = document.querySelector('.page-nav');
let navToggle = document.querySelector('.page-header__button');

navMain.classList.remove('page-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('page-nav--closed')) {
    navMain.classList.remove('page-nav--closed');
    navMain.classList.add('page-nav--opened');
  } else {
    navMain.classList.add('page-nav--closed');
    navMain.classList.remove('page-nav--opened');
  }
});
