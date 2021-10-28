export const formatEuro = (price) => {
  return parseInt(price).toLocaleString("es-CO");
};

export const formatExclTax = (price) => {
  const total = parseInt(price, 10);
  const tax = Math.floor(total * 0.19);
  return (total - tax).toLocaleString("es-CO");
};

export const formatIncludeTax = (price) => {
  const total = parseInt(price, 10);
  const tax = Math.floor(total * 0.19);
  return (total + tax).toLocaleString("es-CO");
};

export const formatTax = (price) => {
  const total = parseInt(price, 10);
  const tax = Math.floor(total * 0.19);
  return tax.toLocaleString("es-CO");
};
