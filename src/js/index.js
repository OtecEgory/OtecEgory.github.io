// import Swiper from 'swiper'
// import 'swiper/swiper-bundle.css';


window.onload = function() {

    let listMenu = document.querySelector('div.dropping-list-menu')
    let menuItem = document.querySelector('.menu-list li')

    menuItem.addEventListener('mouseenter', () => {
        listMenu.style.display ='block';
    })

    menuItem.addEventListener('mouseout', () => {
        listMenu.style.display ='none';
    })
    

}