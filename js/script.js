
// header
/* 클릭 시 클래스 부여 */
var menubtn = new EzenAddClass(".menu_btn"); 

// main_view
var main_swiper = new Swiper("#main_view.swiper",{
  wrapperClass: "slider_01",
  slideClass: "view_01",
  
  effect: "fade",
  loop: true,
  speed: 1000,
  autoplay:{
    delay: 5000,
  },

  pagination: {
    el: ".pagination",
    clickable: true,
    bulletActiveClass: "act",
  },
});


// notice
var notice_swiper = new Swiper("#notice > .swiper",{
  wrapperClass: "slider_02",
  slideClass: "view_02",
  
  loop: true,
  spaceBetween: 30,
  speed: 1000,
  autoplay:{
    delay: 5000,
  },

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
    clickable: true,
  },

});