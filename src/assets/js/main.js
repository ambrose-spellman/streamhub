// import { gsap } from "gsap";
// import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', ()=>{

  //Mobile sidebar toggle
  const burgerInHeader = document.querySelector('.header__burger-area.burger .burger__btn')
  const mobileSidebar = document.querySelector('.header__mobile-sidebar')

  burgerInHeader.addEventListener('click', (event) => { toggleMobileSidebar(event, mobileSidebar) })
  const faq_open_buttons = document.querySelectorAll('.faq__list_item-open')
  const faq_item_detail = document.querySelector('.faq__list_item-desc')

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < faq_open_buttons.length; i++) {
      faq_open_buttons[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }

  faq_open_buttons.forEach(item => item.addEventListener('click', toggleAccordion));
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
function toggleFaqDetails(event, detail){
  const { classList } = event.currentTarget

  if (classList.toggle('close')){
    detail.classList.add('opened')
    return
  }
  detail.classList.remove('opened')

}
window.onload = function(){
  "use strict";
  /* ----------------
    TABS
    This tab script is by Misti Wolanski
    http://mistiwolanski.com | https://github.com/Carradee
    If you use id script, please give credit where it’s due.
  ---------------- */
// Declare all variables
  var buttons = document.querySelectorAll(".offer__tabs button");
  var current_button;
  var sections = document.querySelectorAll(".offer__tabs section");
  var current_section;

// show the first tabs
  buttons[0].classList.add("active");
  sections[0].classList.add("active");

// set up onmouseover
  buttons.forEach(function(element){
    // element.onmouseover = changeTab; vremenno
    element.onclick = changeTab;

  }); // end forEach
// get ".active" button
  function getCurrentButton() {
    buttons.forEach(function(element){
      if (element.classList.contains('active')) {
        current_button = element;
      } // end if
    }); // end forEach
    return current_button;
  } // end getCurrentButton()

// get ".active" section
  function getCurrentSection() {
    sections.forEach(function(element){
      if (element.classList.contains('active')) {
        current_section = element;
      } // end if
    }); // end forEach
    return current_section;
  } // end getCurrentSection()

// remove ".active" from inactive sections
  function hideTab() {
    console.log("hideTab() has been run");
    current_section.classList.remove("active");
    current_button.classList.remove("active");
  } // end hideTab()

// add ".active" to active section
  function showTab(id) {
    console.log("showTab(id) has been run");
    sections.forEach(function(element){
      if (element.id === id) {
        element.classList.add("active");
      } // end if
    }); // end forEach
  } // end showTab(id)

  function changeTab() {
//  console.log("changeTab() has been run");
    current_button = getCurrentButton();
    current_section = getCurrentSection();
    if (this.name !== current_button.name) {
      this.classList.add("active");
      hideTab();
      showTab(this.name);
    } // end if
  } // end changeTab()


};