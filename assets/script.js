const berger = document.querySelector('.berger')
const rightSide = document.querySelector('.right__side')
const menuItems = document.querySelector('.menu__items')


// OPEN AND CLOSE BERGER BUTTON WHEN CLICK
berger.addEventListener('click',()=>{
    berger.classList.toggle('exit')
    menuItems.classList.toggle('active__item')
    rightSide.classList.toggle('active__side')
})