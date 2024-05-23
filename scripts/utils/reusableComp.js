import { cart } from "../data/cart.js";
import { wishlist } from "../data/wishlist.js";

export function displayCartQuantity() {
  const cartQuantityEl = document.querySelector('.cart-quantity');
  cartQuantityEl.innerText = cart.calculateCartQuantity();
}

export function displayWishlistCount() {
  const wishlistQuantitytEl = document.querySelector('.wishlist-quantity');
  wishlistQuantitytEl.innerText = wishlist.getWishlistCount();
}