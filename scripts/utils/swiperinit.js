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
    nextEl: '.flash-sales .button-next',
    prevEl: '.flash-sales .button-prev',
    // if(nextEl.)
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

export const categoriesSlider = new Swiper('.swiper.categories', {
  // Optional parameters
  loop: false,

  navigation: {
    nextEl: '.browse-categories .button-next',
    prevEl: '.browse-categories .button-prev',
    // if(nextEl.)
  },
  
  breakpoints: {
    1024: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 25
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    406: {
      slidesPerView: 3,
      spaceBetween: 15
    },

  }
});