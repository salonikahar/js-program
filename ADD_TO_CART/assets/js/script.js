class NavBar {
    constructor() {
      this.render();
    }
  
    render() {
      document.getElementById("navbar").innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><H4>ADD_TO_CART</H4></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="cart.html">Cart (<span id="cart-count">0</span>)</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      `;
    }
  
    updateCartCount(count) {
      document.getElementById("cart-count").textContent = count;
    }
  }
  
  class Footer {
    constructor() {
      this.render();
    }
  
    render() {
      document.getElementById("footer").innerHTML = `
        <footer class="bg-dark text-white text-center py-3">
          <div class="container">
            <h5>ADD_TO_CART</h5>
          </div>
        </footer>
      `;
    }
  }
  class Products {
    constructor(products, cart) {
      this.products = products;
      this.cart = cart;
      this.render();
    }
  
    render() {
      const mainContent = document.getElementById("main-content");
      mainContent.innerHTML = `
        <div class="container my-4">
          <div class="row">
            ${this.products
              .map(
                (product) => `
              <div class="col-md-3 mb-4">
                <div class="card h-100">
                  <img src="${product.image}" class="card-img-top" alt="${product.name}">
                  <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <button class="btn btn-dark text-white w-100" onclick="cart.addTocart('${product.name}','${product.image}','${product.description}')">Add to Cart</button>
                  </div>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
    }
  }
  

  
  class Cart {
    constructor() {
      this.items = JSON.parse(localStorage.getItem("cart")) || [];
      this.updatecart();
    }
  
    addTocart(name, image, description) {
      this.items.push({ name, image, description });
      localStorage.setItem("cart", JSON.stringify(this.items));
      this.updatecart();
    }
  
    updatecart() {
      const navbar = new NavBar();
      navbar.updateCartCount(this.items.length);
    }
  
    displaycart() {
      const cartItemsContainer = document.getElementById("cart-items");
      if (this.items.length === 0) {
        cartItemsContainer.innerHTML = `
          <div class="alert alert-warning text-center" role="alert">
            Your cart is empty
          </div>`;
      } else {
        cartItemsContainer.innerHTML = this.items
          .map(
            (item) => `
          <div class="d-flex align-items-center justify-content-between border-bottom py-2">
            <div>
              <img src="${item.image}" alt="${item.description}" class="img-thumbnail" width="60">
              <strong class="ms-2">${item.name}</strong>
            </div>
            <button class="btn btn-danger btn-sm" onclick="cart.removecart('${item.name}')">Remove</button>
          </div>
        `
          )
          .join("");
      }
    }
  
    removecart(name) {
      this.items = this.items.filter((item) => item.name !== name);
      localStorage.setItem("cart", JSON.stringify(this.items));
      this.displaycart();
      this.updatecart();
    }
  }
  
  const cart = new Cart();
  const sampleimg = [
    {
        name: "Product 1",
        description: "description of project 1",
        image: "https://placehold.co/300x300",
      },
      {
        name: "Product 2",
        description: "description of project 2",
        image: "https://placehold.co/300x300",
      },
      {
        name: "Product 3",
        description: "description of project 3",
        image: "https://placehold.co/300x300",
      },
      {
        name: "Product 4",
        description: "description of project 4",
        image: "https://placehold.co/300x300",
      },
      {
        name: "Product 5",
        description: "description of project 5",
        image: "https://placehold.co/300x300",
      },
      {
        name: "Product 6",
        description: "description of project 6",
        image: "https://placehold.co/300x300",
      },
      {
        name: "Product 7",
        description: "description of project 7",
        image: "https://placehold.co/300x300",
      },
      {
        name: "Product 8",
        description: "description of project 8",
        image: "https://placehold.co/300x300",
      },
  ];
  
  if (document.getElementById("main-content")) {
    new NavBar();
    new Products(sampleimg, cart);
    new Footer();
  }
  
  if (document.getElementById("cart-items")) {
    new NavBar();
    cart.displaycart();

  }
  