// import { gsap } from "gsap";
document.addEventListener('DOMContentLoaded', ()=>{

  //Mobile sidebar toggle
  const burgerInHeader = document.querySelector('.header__burger-area.burger .burger__btn')
  const mobileSidebar = document.querySelector('.header__mobile-sidebar')

  burgerInHeader.addEventListener('click', (event) => { toggleMobileSidebar(event, mobileSidebar) })

})

/**
 * 
 * @param {event} event 
 * @param {node} mobileSidebar 
 * @returns {void}
 */
function toggleMobileSidebar(event, mobileSidebar){
  const { classList } = event.currentTarget

  if (classList.toggle('close')){
    mobileSidebar.classList.add('opened')
    return 
  }
  mobileSidebar.classList.remove('opened')
}