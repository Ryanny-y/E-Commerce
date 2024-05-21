import { products } from "./products.js";

class Cart {

  cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
  
  addToCart(productId) {
    const matchingCartItem = this.cartItems.find(cartItem => cartItem.productId === productId);

    matchingCartItem ? matchingCartItem.quantity++ 
    : this.cartItems.push({
      productId,
      quantity: 1
    })
    
    this.saveToStorage();
  }

  addTimeOut(addedPopUp, timeId) {
    if(timeId) {
      clearTimeout(timeId);
    }

    const timeoutId = setTimeout(() => {
      addedPopUp.classList.add('hidden');
    }, 800);

    return timeoutId;
  }

  calculateCartQuantity() {
    return this.cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
  }

  
}

export const cart = new Cart();