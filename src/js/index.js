var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-previous',
  },
})

window.onload =  function() {

  let visible_menu = ('show')
  let openMenuBtn = document.querySelector('.menu-burger img')
  let menu = document.querySelector('.mob-menu')
  let exit = document.querySelector('.exit')

    function addElem (btn, elem, addlcls) {
      btn.addEventListener('click', () => {
          elem.classList.add(addlcls)
      })
    }
    
    addElem (openMenuBtn, menu, visible_menu)

    function removeElem(btn_ex, elem, delcls) {
      btn_ex.addEventListener('click', () => {
          elem.classList.remove(delcls)
      })
  }
  removeElem(exit, menu, visible_menu)

}