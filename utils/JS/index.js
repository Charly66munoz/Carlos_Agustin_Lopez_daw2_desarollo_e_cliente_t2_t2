let btnCargar = document.querySelector("#btnCargar");
let bodyProducts = document.querySelector("#bodyProducts");
let cartAside = document.querySelector("#cartAside");
let divAside = document.querySelector("#divAside");
let section = document.querySelector("section");

let comprar = document.querySelector("#comprar");
//carrito
let cart = new Cart();
let filterDiv = document.querySelector("#filterDiv");
let categoryFilter = document.querySelector("#categoryFilter");

let url = "https://dummyjson.com/products";

let listProducts = new ListProducts();
//para guardar filtros: 
const activeFilters = {
  category: null,
  brand: null,
  price: null
};

btnCargar.addEventListener("click", () => {
  bodyProducts.innerHTML = "";

  filterDiv.classList.remove("d-none");

  fetch(url)
    .then((res) => res.json())
    .then((res1) => {
      res1.products.forEach((product) => {
        newProduct = new Product(
          product.id,
          product.title,
          product.images[0],
          product.price,
          product.category,
          product.brand ?? "Sin marca",
        );
        listProducts.addProducts(newProduct);
      });

      creatCards(listProducts.getProducts());
      createFilters();
    });
});

function createFilters() {
  const categories = listProducts.getCategories();
  const brands = listProducts.getBrands();

  const categoryFilter = document.querySelector("#categoryFilter");
  const brandFilter = document.querySelector("#brandFilter");

  categories.forEach(cat => {
    const li = document.createElement("li");
    li.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    li.dataset.type = "category";
    li.dataset.value = cat;
    categoryFilter.appendChild(li);
  });

  brands.forEach(brand => {
    const li = document.createElement("li");
    li.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
    li.dataset.type = "brand";
    li.dataset.value = brand;
    brandFilter.appendChild(li);
  });
}

document.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  const { type, value } = li.dataset;
  if (!type) return;

  activeFilters[type] = value;

  console.log("Filtros activos:", activeFilters);
});

btnApplyFilter.addEventListener("click", () => {
  let result = listProducts.getProducts();

  if (activeFilters.category) {
    result = listProducts.getProductsByCategory(activeFilters.category);
    
  }

  if (activeFilters.brand) {
    result = listProducts.getProductsByBrand(activeFilters.brand);
  }
  
  if (activeFilters.price) {
    result = listProducts.getProductsByCheapest();
  }

  creatCards(result);
});

let btnClearFilter = document.querySelector("#btnClearFilter");

btnClearFilter.addEventListener('click',()=>{
  creatCards(listProducts.getProducts())
})

function creatCards(products) {
  bodyProducts.innerHTML = "";
  products.forEach((product) => {
    const col = document.createElement("div");
    col.classList.add(
      "col-12",
      "col-md-6",
      "col-lg-3",
      "mb-2",
      "d-flex",
      "justify-content-center",
    );

    let divCard = document.createElement("div");
    divCard.classList.add("card", "cardStyle");
    divCard.innerHTML = `<img src='${product.getImg()}' alt='${product.getTitle()}
        '> <div class="card-body">
        <h6 class="card-title">${product.getTitle()}</h6>
        <p class="card-text">Marca: ${product.getBrand()}</p>
        <p class="card-text">Precio: ${product.getPriceComa()}</p>
        <p class="card-text">Categoria: ${product.getCategory()}</p>
        <button class="btn btn-primary btn-add-cart" data-id='${product.getId()}'>Añadir al carrito</button>
        </div>`;
    col.appendChild(divCard);
    bodyProducts.appendChild(col);
  });
}

bodyProducts.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-add-cart")) {
    section.classList.remove("col-lg-12");
    section.classList.add("col-lg-9");
    cartAside.classList.remove("d-none");
    let idTget = e.target.dataset.id;
    let product = listProducts.getProducts().find((p) => p.getId() == idTget);
    cart.add(product);
    console.log(cart.getTotal());

    let div1 = document.createElement("div");
    div1.classList.add(
      "card",
      "mt-2",
      "animate__animated",
      "animate__backInLeft",
    );

    div1.innerHTML += `
        <div class="card-body">
          <h6 class="card-title">${product.getTitle()}</h6>
          <p class="card-text">${product.getPriceComa()}</p> 
        </div>`;

    divAside.appendChild(div1);
  }
});


comprar.addEventListener("click", () => {
  Swal.fire({
    theme: "dark",
    title: `¿Estás seguro que deseas comprar estos productos por el total: ${cart.getTotal()}?`,
    text: "Esta acción no se puede deshacer",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, comprar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("Compra realizada");
      Swal.fire({
        theme: "dark",
        title: "Compra realizada con exito",
        text: "Pulse continuar para salir",
        icon: "success",
        confirmButtonText: "Continuar",
      }).then((result1) => {
        cartAside.classList.add("animate__animated", "animate__fadeOutRight");

        cartAside.addEventListener(
          "animationend",
          () => {
            cartAside.classList.remove(
              "animate__animated",
              "animate__fadeOutRight",
            );

            clearCart();
          },
          { once: true },
        );
      });
    } else {
      console.log("Compra cancelada");
    }
  });
});

function clearCart() {
  cartAside.classList.add("d-none");
  section.classList.remove("col-lg-9");
  section.classList.add("col-lg-12");

  divAside.innerHTML = "";

  cart.clear();
}


