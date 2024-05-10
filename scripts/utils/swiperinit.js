import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

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
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    406: {
      slidesPerView: 1,
      spaceBetween: 10
    },
  }
});


export const exploreSwiper = new Swiper('.explore-swiper', {

  spaceBetween: 30,
  navigation: {
    nextEl: '.explore-product-head .button-next',
    prevEl: '.explore-product-head .button-prev',
    // if(nextEl.)
  },

  breakpoints: {
    768: {
      grid: {
        rows: 2,
        fill: 'row'
      },
      slidesPerView: 4,
      spaceBetween: 30
    },
    640: {
      grid: {
        rows: 2,
        fill: 'row'
      },
      slidesPerView: 3,
      spaceBetween: 15
    },
    406: {
      grid: {
        rows: 2,
        fill: 'row'
      },
      slidesPerView: 2,
      spaceBetween: 10
    }, 
  },
  grid: {
    rows: 2,
    fill: 'row'
  },
});

export const teamSwiper = new Swiper('.team-swiper', {

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  gap: 50,

  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    406: {
      slidesPerView: 1,
      spaceBetween: 10
    },
  }
});

export const productDetailSwiper = new Swiper('.product-detail-swiper', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});