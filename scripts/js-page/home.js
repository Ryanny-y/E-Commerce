// import { heroSlider, flashSalesSlider } from "/utils/swiperinit.js";
import * as swipers from "../utils/swiperinit.js";
import { flashSaleCountdown, headerSideBar, sideMenu} from "../utils/handleEffect.js";
import { renderTodayHTML, renderBestSellingHTML, renderExploreProductHTML } from "./home-page/homeSections.js";
import { cart } from "../data/cart.js";
import { displayCartQuantity, displayWishlistCount, searchBar } from "../utils/reusableComp.js";
import { wishlist } from '../data/wishlist.js';
// import { renderAllProducts } from "./all-products.js";
import { products } from "../data/products.js";

function renderHomePage() {
  // For Animations
  headerSideBar();
  sideMenu();
  searchBar();

  // TODAYS HTML ( FLASH SALES )
  renderTodayHTML();
  flashSaleCountdown();

  // BEST SELLING PRODUCTS HTML
  renderBestSellingHTML();

  // EXPLORE PRODUCTS HTML
  renderExploreProductHTML();

  // Render Cart Quantity
  displayCartQuantity();
  displayWishlistCount();

  // Add To Cart
  const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
  addToCartBtns.forEach(addBtn => {
    let timeId;
    addBtn.addEventListener('click', () => {
      const { productId } = addBtn.dataset;
      const addedPopUp = document.querySelector('.added-pop-up');
      addedPopUp.classList.remove('hidden')

      timeId = cart.addTimeOut(addedPopUp, timeId);

      cart.addToCart(productId);
      displayCartQuantity()
    })
  });

  const addToWishListBtn = document.querySelectorAll('.wishlist-btn');
  addToWishListBtn.forEach(wishlistBtn => {
    wishlistBtn.addEventListener('click', () => {
      const { productId } = wishlistBtn.dataset; 
      
      wishlist.addToWishList(productId);
      displayWishlistCount();
    });
  });

  const viewAllBtn = document.querySelectorAll('.view-all-btn');
  viewAllBtn.forEach(viewBtn => {
    viewBtn.addEventListener('click', () => {
      localStorage.setItem('filter-products', JSON.stringify(products));
    })
  });
}

renderHomePage();

