const menu= document.querySelector('.menu')
const closeMenu= document.querySelector('.closeMenu')
const openMenu= document.querySelector('.openMenu')



function show(){
    menu.style.display='flex';
    menu.style.top='0';
}
function close(){
    menu.style.top='-100';
}
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);