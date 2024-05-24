import "./style/style.css"
import { dropList } from "./js/dropList.js"
import { showSlide,nextSlide,prevSlide } from "./js/slider.js";
console.log('Я подключен')

const menuListBtn = document.querySelector('#drop-menu')
menuListBtn.addEventListener('click' , dropList );

showSlide()

const nextSlideBtn = document.querySelector('.services__arrow button:last-child')
nextSlideBtn.addEventListener('click',nextSlide )


const prevSlideSlideBtn = document.querySelector('.services__arrow button:first-child')
prevSlideSlideBtn.addEventListener('click',prevSlide )