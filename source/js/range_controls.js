
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
