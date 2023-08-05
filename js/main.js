/*  wishlist */

const wishlists = document.querySelectorAll(".wishlist i");

for (let wishlist of wishlists) {
  wishlist.addEventListener("click", () => {
    wishlist.classList.toggle("addToFav");
  });
}

/* Swipper  */
var s1 = new Swiper(".s1", {
  slidesPerView: 6,
  spaceBetween: 20,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

var s2 = new Swiper(".s2", {
  slidesPerView: 6,
  spaceBetween: 20,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

var s3 = new Swiper(".s3", {
  slidesPerView: 6,
  spaceBetween: 20,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

var s4 = new Swiper(".s4", {
  slidesPerView: 6,
  spaceBetween: 20,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

var s5 = new Swiper(".s5", {
  slidesPerView: 6,
  spaceBetween: 20,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination5",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next5",
    prevEl: ".swiper-button-prev5",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView:2 ,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

var s6 = new Swiper(".s6", {
  slidesPerView: 6,
  spaceBetween: 20,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination6",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next6",
    prevEl: ".swiper-button-prev6",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

var s7 = new Swiper(".s7", {
  slidesPerView: 6,
  spaceBetween: 20,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination7",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next7",
    prevEl: ".swiper-button-prev7",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
    1300: {
      slidesPerView: 7,
    },
  },
});

var s8 = new Swiper(".s8", {
  slidesPerView: 6,
  spaceBetween: 20,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination8",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next8",
    prevEl: ".swiper-button-prev8",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swipperCategories = new Swiper(".swipperCategories", {
  slidesPerView: 1,
  spaceBetween: 20,
  sliderPerGroup: 1,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination8",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next8",
    prevEl: ".swiper-button-prev8",
  },



  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    300: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
    1400: {
      slidesPerView: 8,
    },
  },
});
