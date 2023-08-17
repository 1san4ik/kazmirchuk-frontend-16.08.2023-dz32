let sliderOffset = 0
const sliderLine = document.querySelector('.slider-line')

const prev = document.querySelector('.sliderPrev')
const next = document.querySelector('.sliderNext')
const images = document.querySelectorAll('.slider .slider-line img')
let count = 0
let width = document.querySelector('.slider').offsetWidth


prev.addEventListener('click', buttonPrev)
next.addEventListener('click', buttonNext)

function buttonPrev() {
    next.style.visibility = 'visible'
    sliderOffset += width
    sliderLine.style.left = sliderOffset + 'px'
    if (sliderOffset > -width) {
        prev.style.visibility = 'hidden'
    }
}

function buttonNext() {
    prev.style.visibility = 'visible'
    sliderOffset -= width
    sliderLine.style.left = sliderOffset + 'px'
    if (sliderOffset < -(width * 3)) {
        next.style.visibility = 'hidden'
    }
}

function resizeSlider() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    sliderOffset = width * count;
    sliderLine.style.left = sliderOffset + 'px';

    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
}

window.addEventListener('resize', resizeSlider)
resizeSlider()
