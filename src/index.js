import "./style/style.css"
import { dropList } from "./js/dropList.js"

console.log('Я подключен')

const menuListBtn = document.querySelector('.header button')
console.log(menuListBtn)


menuListBtn.addEventListener('touchend' || 'click' , dropList );
// menuListBtn.addEventListener('touchend',dropList);