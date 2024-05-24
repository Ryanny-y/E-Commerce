import { products } from "../../data/products.js";

export function renderProductImage() {
  
  const productDetailId = JSON.parse(localStorage.getItem('product-detail-id'));
  const product = products.find(product => product.id === productDetailId);

  const productImageHTML = `
    <!-- SMALL IMGS -->
    <div class="product-small-imgs flex gap-5 md:flex-col basis-full md:basis-36 flex-wrap justify-center">
      <div class="bg-gray-200 p-5 rounded-lg w-28 md:w-32">
        <img src="/${product.image}" alt="" class="w-full max-h-20 max-w-32">
      </div>
      <div class="bg-gray-200 p-5 rounded-lg w-28 md:w-32">
        <img src="/${product.image}" alt="" class="w-full max-h-20 max-w-32">
      </div>
      <div class="bg-gray-200 p-5 rounded-lg w-28 md:w-32">
        <img src="/${product.image}" alt="" class="w-full max-h-20 max-w-32">
      </div>
      <div class="bg-gray-200 p-5 rounded-lg w-28 md:w-32">
        <img src="/${product.image}" alt="" class="w-full max-h-20 max-w-32">
      </div>
    </div>

    <div class="product-big-img flex items-center bg-gray-200 grow justify-center rounded-lg p-10">
      <img src="/${product.image}" alt="" class="max-w-52">
    </div>`;

  const productImageContainer = document.querySelector('.product-image');
  productImageContainer.innerHTML = productImageHTML;
  
};