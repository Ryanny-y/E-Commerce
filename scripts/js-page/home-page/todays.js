import { products } from "../../data/products.js"
import { discountPrice, formatCurrency } from '../../utils/money.js'

export function renderTodayHTML() {

  const todayHTML = 
    products.filter(product => product.dateAdded === new Date().toJSON().slice(0, 10))
    .map(product => 
      `
      <div class="swiper-slide sale-product">
        <div class="product-img-container relative w-full overflow-hidden h-48 md:h-56 mb-2">
          <p class="sale bg-p-red text-white py-1 px-3 absolute top-0 left-0 text-xs text-center rounded-sm">-${product.discount * 100}%</p>
          <i class="fa-regular fa-heart h-transition hover:text-p-red block absolute top-2 right-2"></i>
          <i class="fa-regular fa-eye h-transition hover:text-p-red block absolute top-10 right-2"></i>
          <img class="h-full w-full p-10" src="${product.image}" alt="">
          <button class="bg-black text-white absolute w-full r-0 h-10 add-to-cart-btn">Add to Cart</button>
        </div>
        
        <div class="product-description flex flex-col gap-1">
          <h2 class="product-name tracking-tight">${product.name}</h2>

          <span class="product-price flex gap-4 items-center">
            <p class="discounted-price text-p-red text-base">$${discountPrice(product)}</p>
            <p class="orig-price text-gray-600 text-base line-through">$${formatCurrency(product.priceCents)}</p>
          </span>

          <span class="ratings flex items-center h-4">
            <img class="rating-star h-full" src="images/ratings/rating-${product.rating.stars * 10}.png" alt="">
            <p>(${product.rating.count})</p>
          </span>
        </div>
      </div>
      `
    ).join('');

    const todayProductWrapper = document.querySelector('#js-flash-sale-wrapper');
    todayProductWrapper.innerHTML += todayHTML;
};