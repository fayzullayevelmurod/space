let group = document.querySelector('.group');
let menu_close = document.querySelector('.menu_close');
let media_menu = document.querySelector('.media_menu');

burger_btn.addEventListener('click', () => {
  media_menu.classList.remove('-right-full')
  media_menu.classList.add('right-0');
})

menu_close.addEventListener('click', () => {
  media_menu.classList.add('-right-full');
  media_menu.classList.remove('right-0');
})

let workbtn = document.querySelector('.work-btn');
let workbtntwo = document.querySelector('.work-btn-two');
let contentone = document.querySelector('.content-one');
let contenttwo = document.querySelector('.content-two');
let iconone = document.querySelector('.icon');
let icontwo = document.querySelector('.icon-two');

workbtn.addEventListener('click', () => {
  contentone.classList.remove('hidden');
  contenttwo.classList.add('hidden')
  iconone.classList.add('rotate-[-90deg]')
  icontwo.classList.remove('rotate-[-90deg]')
})

workbtntwo.addEventListener('click', () => {
  contenttwo.classList.remove('hidden');
  contentone.classList.add('hidden');
  iconone.classList.remove('rotate-[-90deg]')
  icontwo.classList.add('rotate-[-90deg]')
})


let swiper = new Swiper(".newsSwiper", {
  spaceBetween: 31,
  navigation: {
    nextEl: ".news-button-next",
    prevEl: ".news-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.20,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

document.querySelectorAll('.complexsSwiper').forEach((item, index) => {
  let swiper2 = new Swiper(item, {
    spaceBetween: 19,
    slidesPerView: 1,
    initialSlide: index == 1 ? 2 : 0,
    navigation: {
      nextEl: document.querySelectorAll(".complexs-button-next")[index],
      prevEl: document.querySelectorAll(".complexs-button-prev")[index],
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
        spaceBetween: 32,
      },
    },
  });
  if(window.innerWidth <= 1024){
    swiper2.slideTo(0)
  }
  window.addEventListener('resize', () => {
    if(window.innerWidth <= 1024){
      swiper2.slideTo(0)
    }
  })
})



