
const heroElement = document.querySelector('.hero');
const sliderElement = document.querySelector('.slider');
const slidesElements = sliderElement.querySelectorAll('.slider__item');
const buttonSlidePrevElement = sliderElement.querySelector('.slider__button--prev');
const buttonSlideNextElement = sliderElement.querySelector('.slider__button--next');
const paginationElement = sliderElement.querySelector('.slider__pagination');
const buttonsElements = Array.from(paginationElement.querySelectorAll('.slider__pagination-button'));

const setButtonState = (buttonElement, isDisabled) => buttonElement.disabled = isDisabled;

setButtonState(buttonSlidePrevElement, true);

const setHeroColor = (nextSlide, currentSlideIndex) => {
    const slideColor = slidesElements[nextSlide].getAttribute('data-color');
    heroElement.classList.replace(
        `hero--${slidesElements[currentSlideIndex].getAttribute('data-color')}`,
        `hero--${slideColor}`
    );
}

const getCurrentSlide = () => Array.from(slidesElements).findIndex((slide) => slide.classList.contains('slider__item--active'));

const toggleActiveClassSlide = (nextSlide, currentSlideIndex) => {
    slidesElements[currentSlideIndex].classList.remove('slider__item--active');
    slidesElements[nextSlide].classList.add('slider__item--active');
}

const updatePaginationButtons = (currentElement) => {
    buttonsElements.forEach((btn) => btn.classList.remove('slider__pagination-button--active'));
    currentElement.classList.add('slider__pagination-button--active');
}

const onPaginationClick = (evt) => {
    const currentButton = evt.target.closest('.slider__pagination-button');
    const currentSlideIndex = getCurrentSlide();
    const slidesCount = slidesElements.length - 1;

    if (!currentButton) return;

    const buttonIndex = buttonsElements.indexOf(currentButton);
    updatePaginationButtons(currentButton);
    toggleActiveClassSlide(buttonIndex, currentSlideIndex);
    setHeroColor(buttonIndex, currentSlideIndex);
    setButtonState(buttonSlidePrevElement, buttonIndex <= 0);
    setButtonState(buttonSlideNextElement, buttonIndex >= slidesCount);

}

const onSlideNextClick = () => {
    const slidesCount = slidesElements.length - 1;
    const currentSlideIndex = getCurrentSlide();
    const nextSlide = currentSlideIndex + 1;

    setButtonState(buttonSlidePrevElement, false);

    if (nextSlide <= slidesCount) {
        toggleActiveClassSlide(nextSlide, currentSlideIndex);
        setHeroColor(nextSlide, currentSlideIndex);
        updatePaginationButtons(buttonsElements[nextSlide]);

        if (nextSlide === slidesCount) {
            setButtonState(buttonSlideNextElement, true);
        }
    }
}

const onSlidePrevClick = () => {
    const currentSlideIndex = getCurrentSlide();
    const prevSlide = currentSlideIndex - 1;

    setButtonState(buttonSlideNextElement, false);

    if (currentSlideIndex >= 1) {
        toggleActiveClassSlide(prevSlide, currentSlideIndex);
        setHeroColor(prevSlide, currentSlideIndex);
        updatePaginationButtons(buttonsElements[prevSlide]);

        if (prevSlide === 0) {
            setButtonState(buttonSlidePrevElement, true);
        }
    }
}

const initSlides = () => {
    buttonSlideNextElement.addEventListener('click', onSlideNextClick);
    buttonSlidePrevElement.addEventListener('click', onSlidePrevClick);
    paginationElement.addEventListener('click', onPaginationClick);
}

export { initSlides };