
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
    // Остановить листание после ручного переключения?
    disableOnIteraction: true,
  },
});

/* RANGE CONTROLS */
const rangeControls = document.querySelector('.range-controls');

if (rangeControls) {
noUiSlider.create(rangeControls, {
  start: [0, 900],
  connect: true,
  step: 10,
  range: {
      'min': 0,
      'max': 1000
  }
  });

  const minprice = document.getElementById('minprice');
  const maxprice = document.getElementById('maxprice');
  const inputs = [minprice, maxprice];

  rangeControls.noUiSlider.on('update', function (values, handle){
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeControls.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
    setRangeSlider(index, e.currentTarget.value);
    });
  });
}

/* LEAFLET */
const map = L.map('map')
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 18);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../../img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    icon: mainPinIcon,
  },
);

marker.addTo(map);
