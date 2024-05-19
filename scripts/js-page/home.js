// import { heroSlider, flashSalesSlider } from "/utils/swiperinit.js";
import * as swipers from "../utils/swiperinit.js";
import { headerSideBar, sideMenu} from "../utils/handleEffect.js";
import { products } from "../data/products.js";
import { renderTodayHTML } from "./home-page/todays.js";

function renderHomePage() {
  // For Animations
  headerSideBar();
  sideMenu();

  renderTodayHTML();


}

renderHomePage();

