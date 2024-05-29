import { dropList, dropForm, dropDesktopForm } from "./drop";

describe("Testing pop-ups ", ()=> {
    it ("Function is a function", () => {
        expect(dropList).toBeInstanceOf(Function);
        expect(dropForm).toBeInstanceOf(Function);
        expect(dropDesktopForm).toBeInstanceOf(Function);
    })

    it ("Mobile: change burger button and show menu", () => {
        const el = document.createElement('div');
        document.body.appendChild(el);
        el.classList.add('header__drop-menuBtn');
        const e = document.createElement('div');
        document.body.appendChild(e);
        e.classList.add('header__drop-menu');
        dropList();
        expect(document.querySelector(".header__drop-menuShow")).toBeTruthy();
        expect(document.querySelector(".header__drop-menuShow")).toBeTruthy();
    })

    it ('Mobile: drop form and change text in button', ()=>{
        const el = document.createElement('div');
        document.body.appendChild(el);
        el.innerHTML = `<div class = drop-menu__feedback>
            <span></span> 
            <span></span> 
        </div>`;
        const form = document.createElement('form') ;
        document.body.appendChild(form);
        form.classList.add('form-feedback');
        dropForm();
        expect(document.querySelector(".hidden")).toBeTruthy();
        expect(document.querySelector(".show")).toBeTruthy();
        expect(document.querySelector(".form-feedback-show")).toBeTruthy();
    })

    it('Desktop: drop form and change text in button',() => {
        const el = document.createElement('div');
        document.body.append(el);
        el.classList.add('contact-desktop__feedback_hidden');
        const btn = document.createElement('button');
        document.body.append(btn);
        btn.innerHTML = `<button id=book>
            <span></span>
            <span></span>
        </button>`;
        dropDesktopForm();
        expect(document.querySelector(".contact-desktop__feedback")).toBeTruthy();
        expect(document.querySelector(".hidden")).toBeTruthy();
        expect(document.querySelector(".show")).toBeTruthy();
    })
})