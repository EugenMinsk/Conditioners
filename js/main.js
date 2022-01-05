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
    1150:{
      centeredSlides: false,
    },
    
  },
  observer: true,
  observeParents: true,
  observeSlideChildren:true,

});

//add fovorites
const hearts = document.querySelectorAll('.heart')

hearts.forEach(element => {
  element.addEventListener('click', ()=>{
    element.classList.toggle('active')
  })
});

//tabs
const tabs = document.querySelectorAll(".tab");

const switchTab = function(event) {
    event.preventDefault();

    let parentTabs = this.parentNode.children;
    let parentTabsContent = this.closest('.catalog-filtres').nextElementSibling.children;
    for (let i = 0; i < parentTabs.length; i++) {
        parentTabs[i].classList.remove("active");
    }
    for (let i = 0; i < parentTabsContent.length; i++) {
        parentTabsContent[i].classList.remove("active-tab");
    }
    this.classList.add("active");
    let number = this.getAttribute('name');
    console.log(number);
    let activeForm = document.querySelector(number);
    activeForm.classList.add("active-tab");
};

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", switchTab);
}