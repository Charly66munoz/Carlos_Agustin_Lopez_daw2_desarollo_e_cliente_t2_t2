class Product{
    id;
    title;
    img;
    price;
    category;
    brand;

    
    constructor(id,title,img, price, category, brand)
    {
        this.id = id;
        this.title = title;
        this.img = img;
        this.price = price;
        this.category = category;
        this.brand = brand;
    }

    getId()
    {
        return this.id;
    }
    setCategory(category) 
    {
        this.category = category; 
    }
    setPrice(price)
    {
        this.price = price; 
    }
    setMarca(brand) 
    {
        this.brand = brand; 
    }
    setTitle(title) 
    {
        this.title = title; 
    }


    getImg() 
    {
        return this.img;
    }
    getCategory() 
    {
        return this.category;
    }
    getPrice() 
    {
        return this.price;
    }
    getPriceComa() 
    {
        return `${String(this.price).replace(".", ",")}€`;
    }
    getBrand() 
    {
        return this.brand; 
    }
    getTitle() 
    {
        return this.title; 
    }


}