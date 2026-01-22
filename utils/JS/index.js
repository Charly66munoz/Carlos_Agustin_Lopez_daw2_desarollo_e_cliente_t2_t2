let btnCargar = document.querySelector("#btnCargar")
let bodyProducts = document.querySelector("#bodyProducts")

let url = "https://dummyjson.com/products"

let listProducts = new ListProducts;

btnCargar.addEventListener('click', ()=> 
{
    console.log("safafasf")
    bodyProducts.innerHTML = '';

    fetch(url)
    .then((res)=> res.json())
    .then((res1)=> 
    {
        
        
        res1.products.forEach(product => 
        {
            
            newProduct = new Product(product.title, product.images[0] , product.price, product.category, product.brand ?? 'Sin marca', );
            listProducts.addProducts(newProduct);
        });
        
        creatCards(listProducts.getProducts())
    }) 

    console.log(listProducts)

})


function creatCards(products)
{
    bodyProducts.innerHTML = '';
    let contador = 0; 
    products.forEach(product => 
    {

        const col = document.createElement("div");
            col.classList.add(
            "col-12",
            "col-md-6",
            "col-lg-4",
            "mb-2",
            "d-flex",
            "justify-content-center"
            );

        let divCard = document.createElement("div");
        divCard.classList.add("card","cardStyle")
        divCard.innerHTML=`<img src='${product.getImg()}' alt='${product.getTitle()}
        '> <div class="card-body">
        <h6 class="card-title">${product.getTitle()}</h6>
        <p class="card-text">${product.getBrand()}</p>
        <p class="card-text">${product.getPriceComa()}</p>
        <p class="card-text">${product.getCategory()}</p>
        <button class="btn btn-primary btn-add-cart" data-id='${contador}'>Añadir al carrito</button>
        </div>`;
        col.appendChild(divCard)
        bodyProducts.appendChild(col)
        contador ++;
    });
    

}

bodyProducts.addEventListener('click', (e) => {
  if (e.target.classList.contains ('btn-add-cart')){
      
        let cartAside = document.querySelector('#cartAside');
        let section = document.querySelector('section');
        section.classList.remove('col-lg-12')
        section.classList.add('col-lg-9')
        cartAside.classList.remove('d-none');
        console.log(listProducts.getProducts()[e.target.dataset.id])

  }
});

/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  
</div>
*/