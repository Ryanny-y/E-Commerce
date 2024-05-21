import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
import { getDiscountedPrice, formatCurrency} from "../utils/money.js"
import { displayCartQuantity } from "../utils/reusableComp.js";

function renderCartHTML() {

  // Dislay Cart Quanttiy
  displayCartQuantity();

  const cartHTML = cart.cartItems.map(cartItem => {
    const matchingProduct = products.find(product => cartItem.productId === product.id);
    const subTotal = (getDiscountedPrice(matchingProduct) * cartItem.quantity).toFixed(2);

    return `
    <div class="product text-xs grid grid-cols-3 items-center justify-items-center md:justify-items-start md:grid-cols-4">
      <div class="product flex items-center gap-2 relative">
        <img src="../${matchingProduct.image}" class="product-img h-16 w-16" alt="">
        <p class="product-name">${matchingProduct.name}</p>
        <p class="product-price absolute md:static md:hidden" style="left: 70px; bottom: -7px;">$${formatCurrency(matchingProduct.priceCents)}</p>
      </div>
      <p class="product-price hidden md:block">$${getDiscountedPrice(matchingProduct)}</p>
      <input type="number" min="1" value="1" class="w-11 sm:w-14 border border-gray-400 p-2 outline-gray-400 justify-self-end sm:justify-self-center md:justify-self-star">
      <p class="justify-self-end sm:justify-self-center md:justify-self-star">${subTotal}</p> 
    </div>
    `
  });


  const cartItemWrapper = document.querySelector('.cart-item-wrapper');
  cartItemWrapper.innerHTML += cartHTML;
}

renderCartHTML();