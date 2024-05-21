import { cart } from "../data/cart.js";

export function displayCartQuantity() {
  const cartQuantityEl = document.querySelector('.cart-quantity');
  cartQuantityEl.innerText = cart.calculateCartQuantity();
}