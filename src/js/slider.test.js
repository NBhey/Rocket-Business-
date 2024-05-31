import { showSlide, goToSlide } from "./slider";

describe('Testing the slider',() =>{
    // let el = document.createElement('ul')
    // document.body.append(el)
    // el.innerHTML = `<ul class =services__content >
    //     <li></li>
    //     <li></li>
    //     <li></li>
    //     <li></li>
    // </ul>`
    // // let el = document.querySelector('.services__content').children;
    // let count = document.querySelector('.services__arrow-count span')
    it ("Function is a function", () => {
        expect(showSlide).toBeInstanceOf(Function);
        expect(goToSlide()).toBeInstanceOf(Function);
    })
})