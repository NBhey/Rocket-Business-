
export function dropList(){
    document.querySelector(".header__drop-menuBtn").classList.toggle("header__drop-menuBtnShow");
    document.querySelector(".header__drop-menu").classList.toggle("header__drop-menuShow");
}

export function dropForm(){
    document.querySelector('.drop-menu__feedback span:first-child').classList.toggle("hidden");
    document.querySelector('.drop-menu__feedback span:last-child').classList.toggle("show");
    document.querySelector('.form-feedback').classList.toggle('form-feedback-show')
}

export function dropDesktopForm(){
    document.querySelector('.contact-desktop__feedback_hidden').classList.toggle('contact-desktop__feedback');
    document.querySelector('#book span:first-child').classList.toggle("hidden")
    document.querySelector('#book span:last-child').classList.toggle("show")
}