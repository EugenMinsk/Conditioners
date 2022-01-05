const swiper = new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //How many slides
  slidesPerView:'auto',
  spaceBetween: 30,
  autoplay:{
    delay:3000,
    disableOnInteraction: false,
  },
  //infinite
  loop:true,
  loopedSlides: 6,
  //breakpoints
  breakpoints: {
    320:{
      centeredSlides: true,

    },
/*     350:{
      centeredSlides: false,
    }, */
    1150:{
      centeredSlides: false,
    },
    
  }
});
const hearts = document.querySelectorAll('.heart')

hearts.forEach(element => {
  element.addEventListener('click', ()=>{
    element.classList.toggle('active')
  })
});