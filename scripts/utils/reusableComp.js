import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
import { wishlist } from "../data/wishlist.js";

export function displayCartQuantity() {
  const cartQuantityEl = document.querySelector('.cart-quantity');
  cartQuantityEl.innerText = cart.calculateCartQuantity();
}

export function displayWishlistCount() {
  const wishlistQuantitytEl = document.querySelector('.wishlist-quantity');
  wishlistQuantitytEl.innerText = wishlist.getWishlistCount();
}

export function searchBar() {
  const searchInput = document.querySelector('.search-bar input');
  searchInput.addEventListener('keydown', (e) => {
    const inputValue = e.target.value;

    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(inputValue.toLowerCase())
      || product.keywords.some(keywords => keywords.includes(inputValue.toLowerCase())))
      .slice(0, 4);

    if(e.key === 'Enter') {
      if(inputValue === '') {
        localStorage.setItem('filter-products', JSON.stringify(products));
      } else {
        localStorage.setItem('filter-products', JSON.stringify(filteredProducts));
      }
      window.location.href = 'http://127.0.0.1:5500/pages/product.html';
    };

    const searchedProducts = filteredProducts.map(product => {
      return `
      <div class=" bg-gray-200 gap-3 flex items-center py-2 px-5 text-xs z-10" style="z-index: 20;">
        <div class="image-wrapper"><img src="/${product.image}" class="w-14" alt=""></div>
        <p>${product.name}</p>
      </div>`
    }).join('');

    const searchItemContainer = document.querySelector('.searched-item-container');
    if(!inputValue) {
      searchItemContainer.innerHTML = '';
    } else {
      searchItemContainer.innerHTML = searchedProducts;
    }
  });

};