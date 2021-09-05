const idealFor = ["Men", "Women"];
const sizes = ["S", "M", "L", "XL", "XXL"];
const brands = [
  "COBIO MAN",
  "VERO LIE",
  "Rimeline Fashion",
  "LOREZA",
  "kipek",
  "SEVEN ROCKS",
];

export const filterProducts = (products, filters) => {
  if (filters.length == 0) {
    return products;
  }

  const filterByIdealFor = filters.find((filter) => idealFor.includes(filter));
  const filterBySizes = filters.find((filter) => sizes.includes(filter));
  const filterByBrands = filters.find((filter) => brands.includes(filter));

  let filteredBySizes;
  let filteredByIdealFor;
  let filteredByBrand;

  if (filterBySizes) {
    filteredBySizes = products.filter((product) => {
      for (let i = 0; i < product.sizes.length; i++) {
        if (filters.includes(product.sizes[i])) {
          return true;
        }
      }
    });
  } else {
    filteredBySizes = products;
  }

  if (filterByIdealFor) {
    filteredByIdealFor = filteredBySizes.filter((product) => {
      for (let i = 0; i < product.idealFor.length; i++) {
        if (filters.includes(product.idealFor[i])) {
          return true;
        }
      }
    });
  } else {
    filteredByIdealFor = filteredBySizes;
  }

  if (filterByBrands) {
    filteredByBrand = filteredByIdealFor.filter((product) => {
      if (filters.includes(product.brand)) {
        return true;
      }
    });
  } else {
    filteredByBrand = filteredByIdealFor;
  }

  return filteredByBrand;
};
