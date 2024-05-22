import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
import { getDiscountedPrice, formatCurrency, getDiscount } from "../utils/money.js";
import { displayCartQuantity } from "../utils/reusableComp.js";

function renderCartHTML() {
  // Display Cart Quantity
  displayCartQuantity();

  const cartHTML = cart.cartItems.map(cartItem => {
    const matchingProduct = products.find(product => cartItem.productId === product.id);
    const subTotal = (getDiscountedPrice(matchingProduct) * cartItem.quantity).toFixed(2);

    return `
    <div class="product product-${matchingProduct.id} text-xs grid grid-cols-3 items-center justify-items-center md:justify-items-start md:grid-cols-4">
      <div class="product flex items-center gap-3 relative">
        <div><img src="../${matchingProduct.image}" class="product-img h-16 w-16" alt=""></div>
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

  // Cart Total
  const subtotal = cart.cartItems.map(cartItem => {
    const product = products.find(product => cartItem.productId === product.id);
    return getDiscountedPrice(product) * cartItem.quantity;
  }).reduce((acc, cur) => acc + cur, 0);
  
  const shipping = subtotal > 140 ? 'FREE' : '$99.99';
  const total = subtotal + (shipping === 'FREE' ? 0 : 99.99);
  const cartTotalHTML = 
  `
  <h6 class="text-lg font-semibold">Cart Total</h6>
            
  <p class="text-sm flex justify-between w-full relative" id="subtotal">
    <span>Subtotal:</span>
    <span class="subtotal">$${subtotal.toFixed(2)}</span>
  </p>

  <p class="text-sm flex justify-between w-full relative" id="shipping">
    <span>Shipping:</span>
    <span class="shipping">${shipping}</span>
  </p>

  <p class="text-sm flex justify-between w-full relative" id="total">
    <span>Total:</span>
    <span class="total">$${total.toFixed(2)}</span>
  </p>
  
  <a href="checkout.html" class="self-center text-sm font-normal bg-p-red text-white px-7 py-3 rounded-sm h-transition hover:bg-black" style="margin-top: -10px;">Proceed to checkout</a>
  `;

  const checkoutWrapper = document.querySelector('.checkout-wrapper');
  checkoutWrapper.innerHTML = cartTotalHTML;

}

function updateCartButtonClickHandler() {
  const productInputEls = document.querySelectorAll('.product-input');
  cart.updateQuantity(productInputEls);
  renderCartHTML();
}

renderCartHTML();