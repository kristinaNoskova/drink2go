const rangeSliderElement = document.querySelector('.filter__range-slider');
const rangeInputFromElement = document.querySelector('.filter__range-input--from');
const rangeInputToElement = document.querySelector('.filter__range-input--to');

rangeInputFromElement.value = 0;
rangeInputToElement.value = 900;

noUiSlider.create(rangeSliderElement, {
    start: [0, 900],
    connect: true,
    range: {
        'min': 0,
        'max': 1000
    },
    step: 1,
    format: {
        to: function (value) {
            return value.toFixed(0);
        },
        from: function (value) {
            return parseFloat(value);
        },
    },
});

rangeSliderElement.noUiSlider.on('update', () => {
    rangeInputFromElement.value = rangeSliderElement.noUiSlider.get()[0];
    rangeInputToElement.value = rangeSliderElement.noUiSlider.get()[1];
});

const updateSlider = (valueSlider) => {
    rangeSliderElement.noUiSlider.set(valueSlider);
}

rangeInputFromElement.addEventListener('change', (evt) => {
    updateSlider([evt.target.value, null]);
})
rangeInputToElement.addEventListener('change', (evt) => { updateSlider([null, evt.target.value]) })

export { };