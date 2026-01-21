let btnCargar = document.querySelector("#btnCargar")
let bodyProducts = document.querySelector("#bodyProducts")

let url = "https://dummyjson.com/products"

let listProducts = new ListProducts;

btnCargar.addEventListener('click', ()=> {
    console.log("safafasf")
    bodyProducts.innerHTML = '';

    fetch(url).then((res)=> res.json())
    .then((res1)=> {
        console.log(res1)
        
    }) 




})