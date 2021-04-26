/*const firstSwiper = new Swiper('.curate-slider', {
  // Optional parameters   
  loop: true,
  slidesPerview: 3,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.curate-button-next',
    prevEl: '.curate-button-prev',     
  },
});
*/
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-buttons-next',
    prevEl: '.slider-buttons-prev',
  },

});

const secondSwiper = new Swiper('.deals-slider', {
  loop: true,
  slidesPerView: 4,  
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.deals-button-next',
    prevEl: '.deals-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
