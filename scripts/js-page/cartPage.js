import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
import { getDiscountedPrice, formatCurrency } from "../utils/money.js";
import { displayCartQuantity } from "../utils/reusableComp.js";

function renderCartHTML() {
  // Display Cart Quantity
  displayCartQuantity();

  const cartHTML = cart.cartItems.map(cartItem => {
    const matchingProduct = products.find(product => cartItem.productId === product.id);
    const subTotal = (getDiscountedPrice(matchingProduct) * cartItem.quantity).toFixed(2);

    return `
    <div class="product product-${matchingProduct.id} text-xs grid grid-cols-3 items-center justify-items-center md:justify-items-start md:grid-cols-4">
      <div class="product flex items-center gap-2 relative">
        <img src="../${matchingProduct.image}" class="product-img h-16 w-16" alt="">
        <p class="product-name">${matchingProduct.name}</p>
        <p class="product-price absolute md:static md:hidden " style="left: 70px; bottom: -7px;">$${formatCurrency(matchingProduct.priceCents)}</p>
      </div>
      <p class="product-price hidden md:block">$${getDiscountedPrice(matchingProduct)}</p>
      <input type="text" value="${cartItem.quantity}" class="p-2 border border-gray-400 outline-none justify-self-end sm:justify-self-center md:justify-self-start product-input" style="width: 48px;" data-product-id="${matchingProduct.id}">
      <p class="justify-self-end sm:justify-self-center md:justify-self-start">${subTotal}</p> 
    </div>
    `;
  }).join('');

  const cartItemWrapper = document.querySelector('.cart-item-wrapper');
  cartItemWrapper.innerHTML = cartHTML;

  const updateCartBtn = document.querySelector('.update-cart-btn');
  updateCartBtn.removeEventListener('click', updateCartButtonClickHandler);
  updateCartBtn.addEventListener('click', updateCartButtonClickHandler);
}

function updateCartButtonClickHandler() {
  const productInputEls = document.querySelectorAll('.product-input');
  cart.updateQuantity(productInputEls);
  renderCartHTML();
}

renderCartHTML();