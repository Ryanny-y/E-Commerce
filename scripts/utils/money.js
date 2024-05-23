export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}

export function getDiscountedPrice(product) {
  if(product.discount > 0) {
    return (formatCurrency(product.priceCents) * product.discount).toFixed(2);
  }
  return formatCurrency(product.priceCents);
};

export function getDiscount(discount) {
  return (discount * 100);
};