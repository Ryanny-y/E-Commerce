import { products } from "./products.js";

class WishList {
  wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];

  addToWishList(productId) {
    const matchingId = products.find(product => productId === product.id).id;
    const inWishList = this.wishlistItems.find(item => matchingId === item);

    if(inWishList) {
      alert('Item already added')
      return;
    } else {
      this.wishlistItems.push(matchingId);
      alert('Added to wishlist')
    }
    this.saveToStorage();
    console.log(this.wishlistItems);
  };

  saveToStorage() {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlistItems));
  }

  getWishlistCount() {
    return this.wishlistItems.length;
  }

  removeToWishList(productId) {
    const index = this.wishlistItems.indexOf(productId);
    this.wishlistItems.splice(index, 1);
    this.saveToStorage();
  }

};

export const wishlist = new WishList();