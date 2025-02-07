const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click' , () => {
    if (menu.classList.contains('disp') == true) {
        menu.classList.remove('disp');
    } else {
        menu.classList.add('disp');
    }
})

const burgering = document.querySelector('#burgering');
const menuing = document.querySelector('#menuing');

burgering.addEventListener('click' , () => {
    if (menuing.classList.contains('dispa') == true) {
        menuing.classList.remove('dispa');
    } else {
        menuing.classList.add('dispa');
    }
})
