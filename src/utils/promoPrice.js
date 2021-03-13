export const promoPrice = (cost, discount) => {
  return cost - ((cost * discount) / 100);
};
console.log('cost after discount', promoPrice());
