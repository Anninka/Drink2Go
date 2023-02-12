
const swiper = new Swiper('.swiper', {
  // Бесконечный слайдер. Изменить на false, чтобы проверить состояние disabled у стрелок
  loop: true,

  // Добавляет стрелки листания влево-вправо
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Добавляет пагинацию
  pagination: {
    el: '.swiper-pagination',
    // Нажатие на буллеты переключает слайды
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
    // Не заканчивать листать на последнем слайде
    stopOnLastSLide: false,
    // Остановить автолистание после ручного переключения слайдов
    disableOnIteraction: true,
  },
});
