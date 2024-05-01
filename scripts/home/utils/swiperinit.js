// slider
export const heroSlider = new Swiper('.swiper.hero-slider', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

// Flash Sales Slider
export const flashSalesSlider = new Swiper('.swiper.flash-sales', {
  // Optional parameters
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    406: {
      slidesPerView: 2,
      spaceBetween: 10
    },

  }
});