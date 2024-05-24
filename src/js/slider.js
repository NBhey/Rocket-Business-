
let currentSlide = 0;
let el = document.querySelector('.services__content').children;
let count = document.querySelector('.services__arrow-count span')
export function showSlide(){
    for(let i = 0; i < el.length; i++){
        el[i].style.display = 'none'
    }
    el[currentSlide].style.display = 'flex'
    count.textContent = `${currentSlide+1}`
}
export default function goToSlide(index) {
    if (index < 0) {
        index = el.length - 1;
      } else if (index >= el.length) {
        index = 0;
      }
      currentSlide = index;
    for(let i = 0; i < el.length; i++){
        el[i].style.display = 'none'
    }
    el[currentSlide].style.display = 'flex'
    count.textContent = `${currentSlide+1}`
}
export  function nextSlide(){
    goToSlide(currentSlide + 1);
}
export function prevSlide() {
    goToSlide(currentSlide - 1);
  }