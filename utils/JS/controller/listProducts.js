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

}