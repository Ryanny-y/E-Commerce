import { Product, products } from "../../data/products.js";
import { getDiscountedPrice } from '../../utils/money.js'

export function renderProductInfo() {

  const productDetailId = JSON.parse(localStorage.getItem('product-detail-id'));

  const product = products.find(product => product.id === productDetailId);

  const productInfoHTML = `
  <div class="product-text flex flex-col gap-3 text-xs">
    <p class="name font-semibold text-2xl">${product.name}</p>

    <span class="ratings flex gap-2 text-gray-500">
      <img src="/${product.getRatingStar()}" alt="stars" class="w-20 h-4">
      <p class="reviews">(${product.getRatingCount()} Reviews)</p>
      <p>|</p>
      <p class="text-lime">In Stock</p>
    </span>

    <p class="price text-xl font-semibold">$${getDiscountedPrice(product)}</p>
    <p class="text-justify leading-5">${product.description}</p>
  </div>
  <hr>

  <!-- CONFIG -->
  <div class="product-config flex flex-col gap-3">
    <div class="colours flex gap-2 items-center">
      <p class="text-lg font-semibold mr-2">Colours:</p>
      <input type="radio" name="colour" checked class="accent-blue-500 h-4 w-4" value="blue">
      <input type="radio" name="colour" class="accent-red-500 h-4 w-4" value="red">
    </div>

    <div class="size flex items-center gap-2">
      <p class="text-lg font-semibold">Size:</p>
      <button class="text-sm p-1 w-8 rounded text-center border border-gray-400 h-transition hover:text-white hover:bg-p-red hover:border-p-red" value="xs">XS</button>
      <button class="text-sm p-1 w-8 rounded text-center border border-gray-400 h-transition hover:text-white hover:bg-p-red hover:border-p-red" value="s">S</button>
      <button class="text-sm p-1 w-8 rounded text-center border border-gray-400 h-transition hover:text-white hover:bg-p-red hover:border-p-red" value="md">M</button>
      <button class="text-sm p-1 w-8 rounded text-center border border-gray-400 h-transition hover:text-white hover:bg-p-red hover:border-p-red" value="l">L</button>
      <button class="text-sm p-1 w-8 rounded text-center border border-gray-400 h-transition hover:text-white hover:bg-p-red hover:border-p-red" value="xl">XL</button>
    </div>

    <div class="quantities flex items-center gap-4 mt-2 flex-wrap">
      <div class="product-quantity flex h-14 md:basis-32 items-center text-center border border-gray-400 self-stretch rounded">
        <button class="minus h-full border-r-gray-400 border px-3 hover:bg-p-red hover:text-white hover:border-p-red">
          <i class="fa-solid fa-minus w-full"></i>
        </button>
        <input type="number" value="1" min="1" class="input-quantity text-center outline-none flex-grow">
        <button class="plus h-full border-l-gray-400 border px-3 hover:bg-p-red hover:text-white hover:border-p-red">
          <i class="fa-solid fa-plus w-full"></i>
        </button>
      </div>

      <a href="checkout.html" class="buy-now-btn text-sm self-stretch px-10 py-4 rounded text-center bg-p-red whitespace-nowrap text-white h-transition hover:bg-red-400">Buy Now</a>
      <button class="text-xl self-stretch w-10 py-4 rounded text-center border border-gray-400 h-transition hover:bg-p-red hover:text-white hover:border-none"><i class="fa-regular fa-heart"></i></button>

    </div>
  </div>

  <!-- DELIVERY INFO -->
  <div class="delivery-info flex flex-col w-full">
    <div class="free-delivery flex items-center gap-3 py-5 px-3 border border-gray-400 rounded-t-lg">
      <i class="fa-solid fa-truck-fast text-2xl"></i>
      <div class="delivery-text text-xs">
        <p class="text-base mb-1 font-semibold">Free Delivery</p>
        <p>Enter your postal code for Delivery Avaialability</p>
      </div>
    </div>
    
    <div class="return-delivery flex items-center gap-3 py-5 px-3 border border-gray-400 rounded-b-lg">
      <i class="fa-solid fa-arrows-rotate text-2xl"></i>
      <div class="delivery-text text-xs">
        <p class="text-base mb-1 font-semibold">Return Delivery</p>
        <p>Enter your postal code for Delivery Avaialability</p>
      </div>
    </div>
  </div>
  `;

  const productInfoContainer = document.querySelector('.product-info');
  productInfoContainer.innerHTML = productInfoHTML;

  // VARIABLES
  const inputQuantity = productInfoContainer.querySelector('.product-quantity .input-quantity');
  const addQuantity = productInfoContainer.querySelector('.product-quantity .plus');
  const minusQuantity = productInfoContainer.querySelector('.product-quantity .minus');
  const buyNowBtn = productInfoContainer.querySelector('.buy-now-btn');



}
