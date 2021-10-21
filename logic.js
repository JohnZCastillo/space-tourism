const menu = document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__lists');
const menuClose = document.querySelector('.nav__close');

let menuIsOpen = false;
menu.addEventListener('click',menuIsClick);
menuClose.addEventListener('click',menuIsClick);

function menuIsClick(){
    if(menuIsOpen){
        menuList.classList.add('hide');
        menuIsOpen = false;
    }else{
        menuList.classList.remove('hide');
        menuIsOpen = true;
    }
}