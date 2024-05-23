// import { products } from '../data/products.js';
import { getDiscountedPrice, getDiscount, formatCurrency } from '../utils/money.js';
import { displayCartQuantity, displayWishlistCount, searchBar } from '../utils/reusableComp.js';
import { cart } from '../data/cart.js';
import { wishlist } from '../data/wishlist.js';
import { Product } from '../data/products.js';

function renderAllProducts() {
  // DISPLAY QUANTITIES
  displayCartQuantity();
  displayWishlistCount();
  searchBar();

  const products = JSON.parse(localStorage.getItem('filter-products')).map(product => new Product(product)) || [];

  const productsHTML = products.map(product => `
  <div class="product product-${product.id}">
    <div class="product-img-container relative w-full h-48 md:h-56 mb-2">
      <p class="sale bg-p-red text-white py-1 px-3 absolute top-0 left-0 text-xs text-center rounded-sm">-${getDiscount(product.discount)}%</p>
      <i class="wishlist-btn fa-regular fa-heart h-transition hover:text-p-red block absolute top-2 right-2" data-product-id=${product.id}></i>
      <i class="fa-regular fa-eye h-transition hover:text-p-red block absolute top-10 right-2"></i>
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
  `).join(''); 

  const allProductContainer = document.querySelector('.all-products-container');
  allProductContainer.innerHTML = productsHTML;

  const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
  addToCartBtns.forEach(addBtn => {
    addBtn.addEventListener('click', () => {
      const { productId } = addBtn.dataset;
      cart.addToCart(productId);
      renderAllProducts();
    })
  });

  const wishlistBtns = document.querySelectorAll('.wishlist-btn');
  wishlistBtns.forEach(wishlistBtn => {
    wishlistBtn.addEventListener('click', () => {
      const { productId } = wishlistBtn.dataset;
      wishlist.addToWishList(productId);
      renderAllProducts();
    });
  });
}

renderAllProducts();