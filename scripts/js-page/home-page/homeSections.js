import { products } from "../../data/products.js"
import { getDiscountedPrice, formatCurrency, getDiscount } from '../../utils/money.js'
import { exploreSwiper, flashSaleSwiper  } from "../../utils/swiperinit.js";

export function renderTodayHTML() {

  const todayHTML = 
    products.filter(product => product.dateAdded === new Date().toJSON().slice(0, 10))
    .map(product => 
      `
      <div class="swiper-slide sale-product">
        <div class="product-img-container relative w-full overflow-hidden h-48 md:h-56 mb-2">
          <p class="sale bg-p-red text-white py-1 px-3 absolute top-0 left-0 text-xs text-center rounded-sm">-${getDiscount(product.discount)}%</p>
          <i class="fa-regular fa-heart h-transition hover:text-p-red block absolute top-2 right-2"></i>
          <i class="fa-regular fa-eye h-transition hover:text-p-red block absolute top-10 right-2"></i>
          <img class="h-full w-full px-10 py-8" src="${product.image}" alt="">
          <button class="bg-black text-white absolute w-full r-0 h-10 add-to-cart-btn" data-product-Id="${product.id}">Add to Cart</button>
        </div>
        
        <div class="product-description flex flex-col gap-1">
          <h2 class="product-name tracking-tight">${product.name}</h2>

          <span class="product-price flex gap-4 items-center">
            <p class="discounted-price text-p-red text-base">$${getDiscountedPrice(product)}</p>
            <p class="orig-price text-gray-600 text-base line-through">$${formatCurrency(product.priceCents)}</p>
          </span>

          <span class="ratings flex items-center h-4">
            <img class="rating-star h-full" src="${product.getRatingStar()}" alt="">
            <p>(${product.getRatingCount()})</p>
          </span>
        </div>
      </div>
      `
    ).join('');

    const todayProductWrapper = document.querySelector('#js-flash-sale-wrapper');
    todayProductWrapper.innerHTML = todayHTML;

    // Flash Sales Slider
    flashSaleSwiper();
};

export function renderBestSellingHTML() {

  const bestSellingHTML = 
    products.sort((a, b) => b.rating.count - a.rating.count)
    .slice(0, 4)
    .map(product => 
      `
      <div class="best-selling-product">
        <div class="product-img-container relative w-full overflow-hidden h-48 md:h-56 mb-2">
          <p class="sale bg-p-red text-white py-1 px-3 absolute top-0 left-0 text-xs text-center rounded-sm">-${getDiscount(product.discount)}%</p>
          <i class="fa-regular fa-heart h-transition hover:text-p-red block absolute top-2 right-2"></i>
          <i class="fa-regular fa-eye h-transition hover:text-p-red block absolute top-10 right-2"></i>
          <img class="h-full w-full px-10 py-8" src="${product.image}" alt="">
          <button class="bg-black text-white absolute w-full r-0 h-10 add-to-cart-btn" data-product-Id="${product.id}"}>Add to Cart</button>
        </div>
        
        <div class="product-description flex flex-col gap-1">
          <h2 class="product-name tracking-tight">${product.name}</h2>

          <span class="product-price flex gap-4 items-center">
            <p class="discounted-price text-p-red text-base">$${getDiscountedPrice(product)}</p>
            <p class="orig-price text-gray-600 text-base line-through">$${formatCurrency(product.priceCents)}</p>
          </span>

          <span class="ratings flex items-center h-4">
            <img class="rating-star h-full" src="${product.getRatingStar()}" alt="">
            <p>(${product.getRatingCount()})</p>
          </span>
        </div>
      </div>
      `
    ).join('');
    
    const bestSellingContainerEl = document.querySelector('.best-selling-container');
    bestSellingContainerEl.innerHTML = bestSellingHTML;
};

export function renderExploreProductHTML() {

  const exploreProductHTML = 
    products.sort(() => Math.random() - 0.5)
    .slice(0, 16)
    .map(product => 
      `
      <div class="swiper-slide product-img-container">
        <div class="product-img-container relative w-full overflow-hidden h-48 md:h-56 mb-2">
          <p class="sale bg-p-red text-white py-1 px-3 absolute top-0 left-0 text-xs text-center rounded-sm">-${getDiscount(product.discount)}%</p>
          <i class="fa-regular fa-heart h-transition hover:text-p-red block absolute top-2 right-2"></i>
          <i class="fa-regular fa-eye h-transition hover:text-p-red block absolute top-10 right-2"></i>
          <img class="h-full w-full px-10 py-8" src="${product.image}" alt="">
          <button class="bg-black text-white absolute w-full r-0 h-10 add-to-cart-btn" data-product-Id="${product.id}"}>Add to Cart</button>
        </div>
        
        <div class="product-description flex flex-col gap-1">
          <h2 class="product-name tracking-tight">${product.name}</h2>

          <span class="product-price flex gap-4 items-center">
            <p class="discounted-price text-p-red text-base">$${getDiscountedPrice(product)}}</p>
            <p class="orig-price text-gray-600 text-base line-through">$${formatCurrency(product.priceCents)}</p>
          </span>

          <span class="ratings flex items-center h-4">
            <img class="rating-star h-full" src="${product.getRatingStar()}" alt="">
            <p>(${product.getRatingCount()})</p>
          </span>
        </div>
      </div>`
    ).join('');

    const exploreProductContainerEl = document.querySelector('.explore-swiper .swiper-wrapper');
    exploreProductContainerEl.innerHTML = exploreProductHTML;

    exploreSwiper();
}