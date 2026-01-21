class Cart {
  constructor() {
    this.items = [];
  }

  add(product) {
    this.items.push(product);
  }

  getTotal() {
    return this.items.reduce((total, p) => total + p.price, 0);
  }

  clear() {
    this.items = [];
  }
}