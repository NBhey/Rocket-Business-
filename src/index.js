import "./style/style.css"
import { dropList, dropForm, dropDesktopForm } from "./js/drop.js"
import { showSlide,nextSlide,prevSlide } from "./js/slider.js";
import { submitForm } from "./js/sendForm.js";
showSlide()

const nextSlideBtn = document.querySelector('.services__arrow button:last-child')
nextSlideBtn.addEventListener('click',nextSlide )


const prevSlideSlideBtn = document.querySelector('.services__arrow button:first-child')
prevSlideSlideBtn.addEventListener('click',prevSlide )


const menuListBtn = document.querySelector('#drop-menu')
menuListBtn.addEventListener('click' , dropList );

const formDesktop = document.getElementById('book')
formDesktop.addEventListener('click', dropDesktopForm)

const form = document.querySelector('.drop-menu__feedback')
form.addEventListener('click', dropForm)

const sendForm = document.querySelector('.form-feedback')
sendForm.addEventListener('submit', submitForm)

const sendFormDesktop = document.querySelector('.contact-desktop__feedback_hidden')
sendFormDesktop.addEventListener('submit', submitForm)




