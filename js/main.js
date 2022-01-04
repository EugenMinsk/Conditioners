const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

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
  // And if we need scrollbar
/*   scrollbar: {
    el: '.swiper-scrollbar',
  }, */
});
const hearts = document.querySelectorAll('.heart')

hearts.forEach(element => {
  element.addEventListener('click', ()=>{
    element.classList.toggle('active')
  })
});