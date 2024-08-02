let burger_btn = document.querySelector('.burger_btn');
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



ymaps.ready(init);

function init() {
  // Harita yaratish
  var myMap = new ymaps.Map("map", {
    center: [44.895, 37.316], // Haritani kordinatalari yoziladi (kinorlarda aytadiku kordinatalarni ayt deb 🙂 )
    zoom: 13,
    controls: ["zoomControl", "fullscreenControl"],
  });

  myMap.setType("yandex#map");
  myMap.geoObjects.options.set("preset", "islands#grayIcon");

  // Define the coordinates of the locations
  var location1 = [44.89, 37.32]; // Example coordinates
  var location2 = [44.9, 37.31]; // Example coordinates

  // manzilini ko'rsatadiku pin qilib o'sha narsa yoziladigan joy
  var placemark1 = new ymaps.Placemark(
    location1,
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "../../public/assets/images/icons/location.svg", // rasim manzili
      iconImageSize: [218, 59], // rasim qysayiz rasimni zazmeri
      iconImageOffset: [-15, -15], // rasimni joylashtirish yani positsiyasi
    }
  );
  var placemark2 = new ymaps.Placemark(
    location2,
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "../../public/assets/images/icons/locationtwo.svg", // rasim manzili
      iconImageSize: [57, 82], // rasim qysayiz rasimni zazmeri
      iconImageOffset: [-15, -15], // rasimni joylashtirish yani positsiyasi
    }
  );

  // Yuqoridagi placemarkni add qilish hudi classlist.add day
  myMap.geoObjects.add(placemark1);
  myMap.geoObjects.add(placemark2);
}
