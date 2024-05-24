import { products } from "../data/products.js";

function renderProductDetailHTML() {

  const productDetailId = JSON.parse(localStorage.getItem('product-detail-id'));

  const product = products.find(product => product.id === productDetailId);
  
  console.log(product);
}

renderProductDetailHTML();