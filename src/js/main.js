let heart = document.querySelectorAll('.heart_in .heart');

heart.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active')
  })
})


let swiper = new Swiper(".homeSwiper", {
  spaceBetween: 10,
  slidesPerView: 2.20,
  navigation: {
    nextEl: ".home-button-next",
    prevEl: ".home-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    768: {
      spaceBetween: 20,
      slidesPerView: 4,
    },
    993: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

let swiper2 = new Swiper(".magazineSwiper", {
  spaceBetween: 10,
  slidesPerView: 1.20,
  breakpoints: {
    768: {
      spaceBetween: 20,
      slidesPerView: 2.30,
    },
    993: {
      slidesPerView: 2.30,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});

var swiper3 = new Swiper(".favoritesSwiper", {
  pagination: {
    el: ".swiper-pagination",
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



