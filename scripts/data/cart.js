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

  updateQuantity(cartItemsEl) {
    
    let valid = true;

    cartItemsEl.forEach(el => {

      // TODO: Clear Format, Add a choice when deleting the product
      const inputValue = parseInt(el.value);
      const { productId } = el.dataset;

      if(this.isInvalidInput(inputValue)) {
        valid = false;
        return;
      } else if(inputValue === 0) {
        alert('The Item will be removed');
        document.querySelector(`.product-${productId}`).remove();
        this.cartItems = this.cartItems.filter(cartItem => cartItem.productId !== productId);
        this.saveToStorage();
      }
      else {
        const matchingProduct = this.cartItems.find(cartItem => productId === cartItem.productId);
        matchingProduct.quantity = inputValue;
      }      
      this.saveToStorage();
    });

    if(valid) {
      alert('cart Updated!');
    } else {
      alert('Something went wrong!');
    }
  }

  isInvalidInput(inputValue) {
    return inputValue === '' || isNaN(inputValue);
  }
 
}

export const cart = new Cart();