// import { heroSlider, flashSalesSlider } from "/utils/swiperinit.js";
import * as swipers from "../utils/swiperinit.js";
import { flashSaleCountdown, headerSideBar, sideMenu} from "../utils/handleEffect.js";
import { renderTodayHTML, renderBestSellingHTML, renderExploreProductHTML } from "./home-page/homeSections.js";
import { addToWishList, displayCartQuantity, displayWishlistCount, searchBar, addToCartBtn } from "../utils/reusableComp.js";
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

  const shopNowBtns = document.querySelectorAll('.shop-now');
  shopNowBtns.forEach(shopNowBtn => {
    shopNowBtn.addEventListener('click', () => {
      localStorage.setItem('filter-products', JSON.stringify(products));
    })
  });

  const viewProductBtns = document.querySelectorAll('.view-product-btn');
  viewProductBtns.forEach(viewBtn => {
    viewBtn.addEventListener('click',() => {
      const { productId } = viewBtn.dataset;
      localStorage.setItem('product-detail-id', JSON.stringify(productId));
    });
  });

}

renderHomePage();

