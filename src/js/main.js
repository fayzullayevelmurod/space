try {
  let heart = document.querySelectorAll('.heart_in .heart');

  heart.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active')
    })
  })
} catch(err) {
  console.log(err);
}

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
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1440: {
      spaceBetween: 20,
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

let swiper4 = new Swiper(".similarSwiper", {
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

let swiper5 = new Swiper(".programsSwiper", {
  spaceBetween: 10,
  slidesPerView: 1.20,
  breakpoints: {
    768: {
      spaceBetween: 20,
    },
    993: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    1440: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
  },
});

let swiper6 = new Swiper(".servicesSwiper", {
  spaceBetween: 10,
  slidesPerView: 1.20,
  breakpoints: {
    768: {
      spaceBetween: 20,
    },
    993: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    1440: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
  },
});

let swiper7 = new Swiper(".commentoneSwiper", {
  spaceBetween: 10,
  slidesPerView: 4.20,
  navigation: {
    nextEl: ".comment-button-next",
    prevEl: ".comment-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 8,
    },
    1024: {
      slidesPerView: 11,
    },
    1440: {
      slidesPerView: 11,
    },
  },
});

let swiper8 = new Swiper(".commenttwoSwiper", {
  spaceBetween: 20,
  slidesPerView: 1.20,
  navigation: {
    nextEl: ".commenttwo-button-next",
    prevEl: ".commenttwo-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    993: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});

let swiper9 = new Swiper(".bigSwiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".big-button-next",
    prevEl: ".big-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper3 = new Swiper(".favoritesSwiper", {
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
  },
});

// document.querySelectorAll('.complexsSwiper').forEach((item, index) => {
//   let swiper2 = new Swiper(item, {
//     spaceBetween: 19,
//     slidesPerView: 1,
//     initialSlide: index == 1 ? 2 : 0,
//     navigation: {
//       nextEl: document.querySelectorAll(".complexs-button-next")[index],
//       prevEl: document.querySelectorAll(".complexs-button-prev")[index],
//     },
//     breakpoints: {
//       1024: {
//         slidesPerView: 1,
//         spaceBetween: 32,
//       },
//     },
//   });
//   if(window.innerWidth <= 1024){
//     swiper2.slideTo(0)
//   }
//   window.addEventListener('resize', () => {
//     if(window.innerWidth <= 1024){
//       swiper2.slideTo(0)
//     }
//   })
// })


try {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [44.895, 37.316],
      zoom: 13,
      controls: ["zoomControl", "fullscreenControl"],
    });

    myMap.setType("yandex#map");
    myMap.geoObjects.options.set("preset", "islands#grayIcon");

    // Define the coordinates of the locations
    var location1 = [44.89, 37.32]; // Example coordinates
    var location2 = [44.9, 37.31]; // Example coordinates
    var location3 = [45.9, 38.31]; // Example coordinates
    var location4 = [46.9, 39.31]; // Example coordinates

    var placemark1 = new ymaps.Placemark(
      location1,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../public/assets/images/icons/location2.svg", // rasim manzili
        iconImageSize: [218, 59], // rasim qysayiz rasimni zazmeri
        iconImageOffset: [-15, -15], // rasimni joylashtirish yani positsiyasi
      }
    );
    var placemark2 = new ymaps.Placemark(
      location2,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../public/assets/images/icons/location1.svg", // rasim manzili
        iconImageSize: [57, 82], // rasim qysayiz rasimni zazmeri
        iconImageOffset: [-15, -15], // rasimni joylashtirish yani positsiyasi
      }
    );
    var placemark3 = new ymaps.Placemark(
      location3,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../public/assets/images/icons/location3.svg", // rasim manzili
        iconImageSize: [47, 72], // rasim qysayiz rasimni zazmeri
        iconImageOffset: [-15, -15], // rasimni joylashtirish yani positsiyasi
      }
    );
    var placemark4 = new ymaps.Placemark(
      location4,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../public/assets/images/icons/location4.svg", // rasim manzili
        iconImageSize: [45, 62], // rasim qysayiz rasimni zazmeri
        iconImageOffset: [-15, -15], // rasimni joylashtirish yani positsiyasi
      }
    );

    // Yuqoridagi placemarkni add qilish hudi classlist.add day
    myMap.geoObjects.add(placemark1);
    myMap.geoObjects.add(placemark2);
    myMap.geoObjects.add(placemark3);
    myMap.geoObjects.add(placemark4);
  }
} catch(err) {
  console.log(err);
}
