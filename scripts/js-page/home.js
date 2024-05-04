// import { heroSlider, flashSalesSlider } from "/utils/swiperinit.js";
import * as swipers from "../utils/swiperinit.js";
import { headerSideBar, sideMenu} from "../utils/handleEffect.js";

function renderProducts() {
  
};

function renderHomePage() {
  
  // Header sidebar
  headerSideBar();
  sideMenu();

  renderProducts();

}

renderHomePage();

