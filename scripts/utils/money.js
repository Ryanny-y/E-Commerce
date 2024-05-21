export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}

export function getDiscountedPrice(product) {
  return (formatCurrency(product.priceCents) * product.discount).toFixed(2);
};

export function getDiscount(discount) {
  return discount.toFixed(2);
};