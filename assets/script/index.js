const botaoMenu = document.querySelector('.headerMenu')
const menu = document.querySelector('.sideMenu')
const voltarMenu = document.querySelector('.iconBack')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('sideMenu--active')
})

voltarMenu.addEventListener('click', () => {
    menu.classList.remove('sideMenu--active')
})