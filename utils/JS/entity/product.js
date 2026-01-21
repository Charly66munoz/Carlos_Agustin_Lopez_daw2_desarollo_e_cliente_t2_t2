class Product{
    img;
    price;
    categoria;
    marca


    constructor(img, price, categoria, marca){
        this.img = img;
        this.price = price;
        this.categoria = categoria;
        this.marca = marca;
    }

    setImg(img) {
        this.img = img; 
    }
    setCategoria(categoria) {
        this.categoria = categoria; 
    }
    setPrice(price) {
        this.price = price; 
    }
    setMarca(marca) {
        this.marca = marca; 
    }
    getImg(img) {
        this.img = img; 
    }
    getCategoria(categoria) {
        this.categoria = categoria; 
    }
    getPrice(price) {
        this.price = price; 
    }
    getMarca(marca) {
        this.marca = marca; 
    }


}