import { products } from '../../data/products.js';
import { getDiscount, getDiscountedPrice, formatCurrency } from '../../utils/money.js';

export function renderRelatedItems() {

  const detailedProductId = JSON.parse(localStorage.getItem('product-detail-id'));
  const detailedProduct = products.find(product => product.id === detailedProductId);

  const relatedItems = products.filter(product => {
    return product.category === detailedProduct.category &&  product.id !== detailedProduct.id;
  });

  const relatedItemsHTML = relatedItems.map(relatedItem => {
  return `
  <div class="related-product related-product-${relatedItem.id}">
    <div class="product-img-container relative w-full h-48 md:h-56 mb-2">
      <p class="sale bg-p-red text-white py-1 px-3 absolute top-0 left-0 text-xs text-center rounded-sm">-${getDiscount(relatedItem.discount)}%</p>
      <i class="wishlist-btn fa-regular fa-heart h-transition hover:text-p-red block absolute top-2 right-2" data-product-id="${relatedItem.id}"></i>
      <i class="view-product-btn fa-regular fa-eye h-transition hover:text-p-red block absolute top-10 right-2" data-product-id="${relatedItem.id}"></i>
      <img class="h-full w-full px-10 py-8" src="../${relatedItem.image}" alt="">
      <button class="bg-black text-xs md:text-sm rounded-t-md absolute bottom-0 right-0 left-0 h-10 text-white add-to-cart-btn h-transition hover:bg-p-red" data-product-id="${relatedItem.id}">
        <i class="fa-solid fa-cart-shopping h-transition mr-0 md:mr-2 md:text-sm hover:text-p-red"></i>
      Add to Cart</button>
    </div>
    
    <div class="product-description flex flex-col gap-1">
      <h2 class="product-name tracking-tight">${relatedItem.name}</h2>

      <span class="product-price flex gap-4 items-center">
        <p class="discounted-price text-p-red text-base">$${getDiscountedPrice(relatedItem)}</p>
        <p class="orig-price text-gray-600 text-base line-through">$${formatCurrency(relatedItem.priceCents)}</p>
      </span>

      <span class="ratings flex items-center h-4">
        <img class="rating-star h-full" src="../${relatedItem.getRatingStar()}" alt="">
        <p>(${relatedItem.getRatingCount()})</p>
      </span>
    </div>
  </div>`
  }).join('');

  const relatedItemContainer = document.querySelector('.related-item-container');
  relatedItemContainer.innerHTML = relatedItemsHTML;
  
};