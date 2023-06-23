const rangeSlider = document.getElementById('range-slider');

const addNoUiSlider = () => {
  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [0, 900],
      connect: true,
      step: 1,
      range: {
        'min': [0],
        'max': [900]
      }
    });

    const minPrice = document.getElementById('input-min-price');
    const maxPrice = document.getElementById('input-max-price');
    const inputs = [minPrice, maxPrice];

    rangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
    });

    const setRangSlider = (index, value) => {
      let arr = [null, null];
      arr[index] = value;

      console.log(arr);

      rangeSlider.noUiSlider.set(arr)
    };

    inputs.forEach((input, index) => {
      input.addEventListener('change', (el) => {
        console.log(index);
        setRangSlider(index, el.currentTarget.value);
      });
    });

  }
}

export { addNoUiSlider };
