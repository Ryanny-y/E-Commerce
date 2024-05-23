import { products } from '../data/products.js'
import { cart } from '../data/cart.js';
import { getDiscountedPrice } from '../utils/money.js';
import { displayCartQuantity, displayWishlistCount } from '../utils/reusableComp.js';

function renderCheckOut() {

  // DISPLAY QUANTITIES
  displayCartQuantity();
  displayWishlistCount()
  
  let subtotal = 0;

  // CHECKOUT HTML
  const checkoutOrderHTML = 
    cart.cartItems.map(cartItem => {
      const product = products.find(product => product.id === cartItem.productId);
      const productSubtotal = (getDiscountedPrice(product) * cartItem.quantity);
      subtotal += productSubtotal;

      return `
      <div class="ordered-item flex items-center gap-3 h-12 text-xs md:text-sm justify-start font-semibold">
        <img src="/${product.image}" alt="" class="h-full w-12 shrink-0" >
        <p class="flex justify-between w-full">
          <span class="product-name">${product.name}</span>
          <span class="product-price">$${productSubtotal}</span>
        </p>
      </div>`;
    }).join('');

  const shipping = subtotal > 140 ? 0 : 4.99;
  let total = subtotal + shipping;

  const orderItemsEl = document.querySelector('.order-items');
  orderItemsEl.innerHTML = checkoutOrderHTML;

  // ORDER SUMMARY (PRICE)
  const orderPriceSummary = document.querySelector('.order-price-summary');
  orderPriceSummary.innerHTML = `
  <div class="order-subtotal flex justify-between items-center relative">
    <p>Subtotal:</p>
    <p>$${subtotal}</p>
  </div>

  <div class="order-shipping flex justify-between items-center relative">
    <p>Shipping:</p>
    <p>${!shipping ? 'FREE' : '4.99'}</p>
  </div>
  
  <div class="order-total flex justify-between items-center relative">
    <p>Total:</p>
    <p>$${total}</p>
  </div>`;

  const placeOrder = document.querySelector('#billing-form');
  placeOrder.addEventListener('submit', () => {
    alert('Placed order');
    localStorage.removeItem('cart');
    renderCheckOut();
  });
}

renderCheckOut();