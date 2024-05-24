(()=>{"use strict";var n={106:(n,e,t)=>{t.d(e,{A:()=>b});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),s=t(417),c=t.n(s),p=new URL(t(549),t.b),l=new URL(t(185),t.b),d=new URL(t(510),t.b),u=new URL(t(689),t.b),f=new URL(t(917),t.b),h=a()(r()),g=c()(p),x=c()(l),m=c()(d),_=c()(u),v=c()(f);h.push([n.id,`*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\na:active,\na:hover,\na {\n  text-decoration: none;\n \n}\nbutton{cursor: pointer;}\nheader{\n    position: relative;\n    margin: 0 auto;\n    max-width:375px;\n    max-height: 65px;\n    padding: 5px 10px;\n    display: flex;\n    justify-content:space-between;\n    align-items:center;\n}\n.header__drop-menuBtn{\n    display: block;\n    width: 40px;\n    height: 40px;\n    background-image: url(${g});\n    background-repeat: no-repeat;\n    background-position: center center;\n}\n.header__drop-menuBtnShow{\n    background-image: url(${x});\n}\n.header__drop-menu{\n    position: absolute;\n    top: 50px;\n    left: 0px;\n    display: none;\n    min-width: 375px;\n    min-height: 620px;\n    padding: 30px 15px 0;\n    opacity: 0.9;\n    z-index: 1;\n    background-color: #45927F;\n}\n.drop-menu__navigation {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-family: 'PT Sans Caption',sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 18.12px;\n}\n.drop-menu__navigation a{\n    color: #FFFFFF;\n}\n.header__drop-menuShow{\n    display: block;\n}\n.header button{\n    border-style: none; \n    background-color:inherit;\n}\n.header__logo{\n    width: auto;\n    height: 18.32px;\n}\n.header__contact {\n    display: flex;\n    flex-direction: column;\n    font-family: 'PT Sans Caption',sans-serif;\n    color:#364844;\n    font-style: normal;\n    text-align: right;\n}\n.header__contact a{\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 20.7px;\n    color: inherit;\n}\n.header__contact span{\n    font-weight: 400;\n    font-size: 13px;\n    line-height: 16.82px;\n}\n.main{\n    margin: 0 auto 40px;\n    max-width: 375px;\n    max-height: 549px;\n    display: grid;\n    grid-template-areas:\n    "image"\n    "title"\n    "content";\n    color: #364844;\n\n}\n.main__image{\n    grid-area: image;\n    max-width: 375px;\n    display: block;\n    margin-bottom: 40px;\n}\n.main__title{\n    grid-area: title;\n    margin-bottom: 20px;\n    padding: 0 17.5px;\n    font-family: 'PT Sans Caption',sans-serif;\n    font-weight: 700;\n    font-size: 26px;\n    line-height: 33.64px; \n}\n.main__content{\n    grid-area: content;\n    padding: 0 17.5px;\n    font-family: 'PT Sans Caption',sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 21px; \n}\n.services{\n    margin: 0 auto 30px;\n    padding: 0 13.5px;\n    max-width: 375px;\n}\n.services__image{\n    display: block;\n    margin: 0 auto;\n    width: 100%;\n}\n.services__content{\n    padding:20px 10px 25px ;\n    background-color:#E2F0EF;\n    display: flex;\n    font-family: 'PT Sans Caption',sans-serif;\n    color:#364844;\n}\n.services__content-slider{\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n/* .services__content-slider:nth-child(2){\n    display: none;\n} */\n.services__content-title{\n    width: 124px;\n    font-weight: 700;\n    font-size: 26px;\n    line-height: 33.64px;\n}\n.services__content-title span{\n    font-size: 14px;\n    line-height: 18.12px;\n}\n.services__content-list{\n    color:  #1FA181;\n    list-style-position: inside;\n}\n.services__content-list li span{\n    color:#364844;\n}\n.services__content-price{\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 23.29px;\n}\n.services__content-price span{\n    text-decoration:line-through;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 18.12px;\n    color:#868686;\n}\n.services__content-btn{\n    align-self: center;\n}\n.btn{\n    width: 280px;\n    height: 50px;\n    display: flex;\n    justify-content:center;\n    gap: 20px;\n}\n.btn__book {\n    width: 137px;\n    max-height: 43px;\n    border-radius: 50px;\n    border-style: none; \n    background-color:#0DBC91;\n    font-family: inherit;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 21px;\n    color:#FFFFFF;\n}\n.btn__book:hover,.btn__book:focus {\n    background-color: #00D29F;\n}\n.btn__info {\n    width: 137px;\n    max-height: 43px;\n    border-radius: 50px;\n    background:transparent;\n    background-color:rgba (0, 0, 0, 0);\n    border:1px solid #0DBC91;\n    font-family: inherit;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 21px;\n    color:#0DBC91;\n}\n.btn__info:hover,.btn__info:focus {\n    background-color: #0DBC91;\n    color: #FFFFFF;\n}\n.services__arrow {\n    padding-top:20px;\n    width: 340px;\n    display: flex;\n    justify-content:center;\n    align-items: center;\n    gap:15px;    \n}\n.services__arrow button {\n    border-style: none; \n    background-color:inherit;\n}\n.services__arrow button:first-child{\n    width: 34px;\n    height: 22px;\n    background-image: url(${m});\n    background-repeat: no-repeat;\n    background-position: center center;\n}\n.services__arrow button:first-child:hover {\n    background-image:url(${_});\n    transform: rotate(180deg);\n}\n.services__arrow button:last-child{\n    width: 34px;\n    height: 22px;\n    background-image: url(${v});\n    background-repeat: no-repeat;\n    background-position: center center;\n}\n.services__arrow button:last-child:hover {\n    background-image:url(${_});\n}\n.services__arrow-count{\n    font-family: 'PT Sans Caption',sans-serif;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 23.29px;\n    color: #C0C0C0;\n}\n.services__arrow-count span{\n    color: #364844;\n}\n.footer{\n    margin: 0 auto;\n    padding: 30px 15px;\n    max-width: 375px;\n    background-color: #08664F;\n    display: grid;\n    grid-template-areas: \n    "logo social"\n    "nav .";\n    gap: 20px;\n}\n.footer__img{\n    grid-area: logo;\n}\n\n.footer__social{\n    grid-area: social;\n    display: flex;\n    gap: 15px;\n    justify-self: right;\n    list-style-type:none;\n}\n.footer__navigation{\n    grid-area: nav;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-family: 'PT Sans Caption',sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 18.12px;\n}\n.navigation{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-family: 'PT Sans Caption',sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 18.12px;\n}\n.footer__navigation a{\n    color: #FFFFFF;\n}`,""]);const b=h},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],p=o.base?c[0]+o.base:c[0],l=i[p]||0,d="".concat(p," ").concat(l);i[p]=l+1;var u=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),p=0;p<i.length;p++){var l=t(i[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},689:(n,e,t)=>{n.exports=t.p+"assets/arrowActive.f7debefd97950e9c72dd.svg"},510:(n,e,t)=>{n.exports=t.p+"assets/leftArrow.099e8ce54b12aca959f3.svg"},549:(n,e,t)=>{n.exports=t.p+"assets/menu.ec4ec4199dd561816fbb.svg"},185:(n,e,t)=>{n.exports=t.p+"assets/menuOpen.b2cc621d085e9a8121aa.svg"},917:(n,e,t)=>{n.exports=t.p+"assets/rightArrow.e8c7215a164627ccd4ee.svg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),i=t(659),a=t.n(i),s=t(56),c=t.n(s),p=t(540),l=t.n(p),d=t(113),u=t.n(d),f=t(106),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(f.A,h),f.A&&f.A.locals&&f.A.locals;let g=0,x=document.querySelector(".services__content").children,m=document.querySelector(".services__arrow-count span");function _(n){n<0?n=x.length-1:n>=x.length&&(n=0),g=n;for(let n=0;n<x.length;n++)x[n].style.display="none";x[g].style.display="flex",m.textContent=`${g+1}`}console.log("Я подключен"),document.querySelector("#drop-menu").addEventListener("click",(function(){document.querySelector(".header__drop-menuBtn").classList.toggle("header__drop-menuBtnShow"),document.querySelector(".header__drop-menu").classList.toggle("header__drop-menuShow")})),function(){for(let n=0;n<x.length;n++)x[n].style.display="none";x[g].style.display="flex",m.textContent=`${g+1}`}(),document.querySelector(".services__arrow button:last-child").addEventListener("click",(function(){_(g+1)})),document.querySelector(".services__arrow button:first-child").addEventListener("click",(function(){_(g-1)}))})()})();