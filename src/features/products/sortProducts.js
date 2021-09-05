const discountedPrice = (price, discountPercent = 0) => {
  return price * (1 - discountPercent / 100);
};

export const sortProducts = (products, sortBy) => {
  if (sortBy === "none") {
    return products;
  }

  if (sortBy === "LOW_TO_HIGH") {
    return [
      ...products.sort((a, b) => {
        return (
          discountedPrice(a.originalPrice, a.discountPercent) -
          discountedPrice(b.originalPrice, a.discountPercent)
        );
      }),
    ];
  } else {
    return [
      ...products.sort(
        (a, b) =>
          discountedPrice(b.originalPrice, b.discountPercent) -
          discountedPrice(a.originalPrice, b.discountPercent)
      ),
    ];
  }
};
