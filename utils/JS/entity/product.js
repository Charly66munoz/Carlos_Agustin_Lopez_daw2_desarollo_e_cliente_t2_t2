class Product{
    title;
    img;
    price;
    category;
    brand;

    
    constructor(title,img, price, category, brand)
    {
        this.title = title;
        this.img = img;
        this.price = price;
        this.category = category;
        this.brand = brand;
    }

    setImg(img) 
    {
        this.img = img; 
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
        return String(this.price).replace(".", ",");
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