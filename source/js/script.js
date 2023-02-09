
/* BURGER-MENU */
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

/* SWIPER */
const swiper = new Swiper('.swiper', {
  // Выключает бесконечное листание слайдов
  loop: false,

  // Добавляет стрелки листания влево-вправо
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Добавляет пагинацию
  pagination: {
    el: '.swiper-pagination',
    // Нажатие на буллеты переключает слайды?
    clickable: true,
  },

  // Включает управление слайдером с клавиатуры
  keyboard: {
    enabled: true,
    // Только когда слайдер в пределах вьюпорта
    onlyInViewport: true,
  },

  // Автолистание слайдов
  autoplay: {
    // Задержка в мс
    delay: 3000,
    // Закончить на последнем файле?
    stopOnLastSLide: false,
    //Остановить листание после ручного переключения?
    disableOnIteraction: true,
  },
});
