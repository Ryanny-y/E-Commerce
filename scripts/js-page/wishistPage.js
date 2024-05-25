import { products } from "../data/products.js";
import { wishlist } from "../data/wishlist.js";
import { formatCurrency, getDiscount, getDiscountedPrice } from "../utils/money.js";
import { addToCartBtn, addToWishList, displayCartQuantity, displayWishlistCount, searchBar } from "../utils/reusableComp.js";
import { cart } from "../data/cart.js";

function renderWishListHTML() {
  // DIsplay Quantites
  displayCartQuantity();
  displayWishlistCount();
  searchBar();
  
  document.querySelector('.wishlist-count').innerText = wishlist.getWishlistCount();

  const wishlistHTML = wishlist.wishlistItems.map(wishlistItem => {
    const product = products.find(product => product.id === wishlistItem);

    return `
    <div class="wishlist-product wishlist-product-${product.id}">
      <div class="product-img-container relative w-full h-48 md:h-56 mb-2">
        <p class="sale bg-p-red text-white py-1 px-3 absolute top-0 left-0 text-xs text-center rounded-sm">-${getDiscount(product.discount)}%</p>
        <i class="wishlist-btn fa-regular fa-heart h-transition hover:text-p-red block absolute top-2 right-2" data-product-id="${product.id}"></i>
        <i class="view-product-btn fa-regular fa-eye h-transition hover:text-p-red block absolute top-10 right-2" data-product-id="${product.id}"></i>
        <img class="h-full w-full px-10 py-8" src="/${product.image}" alt="">
        <button class="bg-black text-xs md:text-sm rounded-t-md absolute bottom-0 right-0 left-0 h-10 text-white add-to-cart-btn h-transition hover:bg-p-red" data-product-id="${product.id}">
          <i class="fa-solid fa-cart-shopping h-transition mr-0 md:mr-2 md:text-sm hover:text-p-red"></i>
         Add to Cart</button>
      </div>
      
      <div class="product-description flex flex-col gap-1">
        <h2 class="product-name tracking-tight">${product.name}</h2>

        <span class="product-price flex gap-4 items-center">
          <p class="discounted-price text-p-red text-base">$${getDiscountedPrice(product)}</p>
          <p class="orig-price text-gray-600 text-base line-through">$${formatCurrency(product.priceCents)}</p>
        </span>

        <span class="ratings flex items-center h-4">
          <img class="rating-star h-full" src="/${product.getRatingStar()}" alt="">
          <p>(${product.getRatingCount()})</p>
        </span>
      </div>
    </div>
    `;
  }).join('');

  const wishlistContainer = document.querySelector('.wishlist-item-container');
  wishlistContainer.innerHTML = wishlistHTML;

  const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
  addToCartBtns.forEach(addBtn => {
    addBtn.addEventListener('click', () => {
      const { productId } = addBtn.dataset;

      cart.addToCart(productId);
      wishlist.removeToWishList(productId);
      renderWishListHTML();
    });
  });
  
  // JUST FOR YOU
  renderJustForYou();

  addToWishList(renderWishListHTML)

};

function renderJustForYou() {

  const justForYouHTML =
    products.sort(() => Math.random() - 0.5) 
    .slice(0, 4)
    .map(product => 
    `<div class="wishlist-product wishlist-product-${product.id}">
      <div class="product-img-container relative w-full h-48 md:h-56 mb-2">
        <p class="sale bg-p-red text-white py-1 px-3 absolute top-0 left-0 text-xs text-center rounded-sm">-${getDiscount(product.discount)}%</p>
        <i class="wishlist-btn fa-regular fa-heart h-transition hover:text-p-red block absolute top-2 right-2" data-product-id="${product.id}"></i>
        <i class="view-product-btn fa-regular fa-eye h-transition hover:text-p-red block absolute top-10 right-2" data-product-id="${product.id}"></i>
        <img class="h-full w-full px-10 py-8" src="../${product.image}" alt="">
        <button class="bg-black text-xs md:text-sm rounded-t-md absolute bottom-0 right-0 left-0 h-10 text-white add-to-cart-btn h-transition hover:bg-p-red" data-product-id="${product.id}">
          <i class="fa-solid fa-cart-shopping h-transition mr-0 md:mr-2 md:text-sm hover:text-p-red"></i>
        Add to Cart</button>
      </div>
      
      <div class="product-description flex flex-col gap-1">
        <h2 class="product-name tracking-tight">${product.name}</h2>

        <span class="product-price flex gap-4 items-center">
          <p class="discounted-price text-p-red text-base">$${getDiscountedPrice(product)}</p>
          <p class="orig-price text-gray-600 text-base line-through">$${formatCurrency(product.priceCents)}</p>
        </span>

        <span class="ratings flex items-center h-4">
          <img class="rating-star h-full" src="../${product.getRatingStar()}" alt="">
          <p>(${product.getRatingCount()})</p>
        </span>
      </div>
    </div>
    `
    ).join('');
   
  const jfyContainer = document.querySelector('.jfy-container');
  jfyContainer.innerHTML = justForYouHTML;
  const addToCartBtns = jfyContainer.querySelectorAll('.add-to-cart-btn');
  addToCartBtn(renderWishListHTML)
}

renderWishListHTML();