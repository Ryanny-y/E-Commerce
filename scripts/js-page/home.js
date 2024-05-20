// import { heroSlider, flashSalesSlider } from "/utils/swiperinit.js";
import * as swipers from "../utils/swiperinit.js";
import { headerSideBar, sideMenu} from "../utils/handleEffect.js";
import { renderTodayHTML, renderBestSellingHTML, renderExploreProductHTML } from "./home-page/homeSections.js";

function renderHomePage() {
  // For Animations
  headerSideBar();
  sideMenu();

  // TODAYS HTML ( FLASH SALES )
  renderTodayHTML();

  // BEST SELLING PRODUCTS HTML
  renderBestSellingHTML();

  // EXPLORE PRODUCTS HTML
  renderExploreProductHTML();
}

renderHomePage();

