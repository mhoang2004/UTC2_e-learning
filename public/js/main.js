// header
let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close-search').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active')
}

// ========================= slider ============================
const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slider .slide')
const slideDots = document.querySelectorAll('.slider-dots li')
const slidePrev = document.getElementById('slider-prev-btn')
const slideNext = document.getElementById('slider-next-btn')

let activeSlide = 0 //index
let slidesLength = slides.length

slideNext.onclick = () => {
    activeSlide += 1
    if (activeSlide > slidesLength - 1) {
        activeSlide = 0
    }
    reloadSlider()
}

slidePrev.onclick = () => {
    activeSlide -= 1
    if (activeSlide < 0) {
        activeSlide = slidesLength - 1
    }
    reloadSlider()
}

// auto slide
let autoReloadSlider = setInterval(() => {
    slideNext.click()
}, 5000)

reloadSlider = () => {
    // return the left position (pixel) relative to parent
    let checkLeft = slides[activeSlide].offsetLeft
    slider.style.left = -checkLeft + 'px'

    // remove current dot
    document.querySelector('.slider-dots li.active').classList.remove('active')
    slideDots[activeSlide].classList.add('active')

    clearInterval(autoReloadSlider)
    autoReloadSlider = setInterval(() => {
        slideNext.click()
    }, 4000)
}

slideDots.forEach((li, key) => {
    li.addEventListener('click', () => {
        activeSlide = key
        reloadSlider()
    })
})

//==========Document script============
const accordions = document.getElementsByClassName('document-title')

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', () => {
        accordions[i].classList.toggle('active')
    })
}
