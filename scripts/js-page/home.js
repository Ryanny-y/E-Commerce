// import { heroSlider, flashSalesSlider } from "/utils/swiperinit.js";
import * as swipers from "../utils/swiperinit.js";
import { headerSideBar, sideMenu} from "../utils/handleEffect.js";
import { products } from "../data/products.js";

function renderHomePage() {
  // Header sidebar
  headerSideBar();
  sideMenu();

  console.log(products);

}

renderHomePage();

