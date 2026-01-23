class Cart 
{
  constructor() 
  {
    this.items = [];
  }

  add(product) 
  {
    this.items.push(product);
  }

  getTotal() 
  {
    return `${String(Math.round(this.items.reduce((total, p) => total + p.price, 0) * 100) / 100).replace(".",",")}€`;
  }

  clear() 
  {
    this.items = [];
  }
}