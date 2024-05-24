// import { heroSlider, flashSalesSlider } from "/utils/swiperinit.js";
import * as swipers from "../utils/swiperinit.js";
import { flashSaleCountdown, headerSideBar, sideMenu} from "../utils/handleEffect.js";
import { renderTodayHTML, renderBestSellingHTML, renderExploreProductHTML } from "./home-page/homeSections.js";
import { cart } from "../data/cart.js";
import { addToWishList, displayCartQuantity, displayWishlistCount, searchBar, addToCartBtn } from "../utils/reusableComp.js";
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
  addToCartBtn(displayCartQuantity);

  // Add To Wishlist
  addToWishList(displayWishlistCount);

  const viewAllBtn = document.querySelectorAll('.view-all-btn');
  viewAllBtn.forEach(viewBtn => {
    viewBtn.addEventListener('click', () => {
      localStorage.setItem('filter-products', JSON.stringify(products));
    })
  });
}

renderHomePage();

