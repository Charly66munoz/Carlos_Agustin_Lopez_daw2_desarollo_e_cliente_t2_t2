class ListProducts {
  constructor() {
    this.listProduct = [];
  }

  addProducts(product) {
    this.listProduct.push(product);
  }


  getProducts(){
    return this.listProduct;
  }

  getProductsByCategory(category) {
    return this.listProduct.filter(product => {
      return product.getCategory() === category;
    });
  }
  getProductsByBrand(brand) {
    return this.listProduct.filter(product => {
      return product.getBrand() === brand;
    });
  }

  getProductsByCheapest() {
  return [...this.listProduct].sort((a, b) => {
    return a.getPrice() - b.getPrice();
  });
}

  getCategories() {
    let categories = [];

    this.listProduct.forEach(product => {
      const category = product.getCategory();

      if (!categories.includes(category)) {
        categories.push(category);
      }
    });

    return categories;
  }
  getBrands() {
    let brands = [];

    this.listProduct.forEach(product => {
      const brand = product.getBrand();

      if (!brands.includes(brand)) {
        brands.push(brand);
      }
    });

    return brands;
  }

}