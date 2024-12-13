
class NavBar {
  constructor() {
    this.navbarElement = document.getElementById("navbar");
    this.render();
  }

  render() {
    this.navbarElement.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><h4>ADD_TO_CART</h4></a>
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
    this.footerElement = document.getElementById("footer");
    this.render();
  }

  render() {
    this.footerElement.innerHTML = `
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
    this.productsContainer = document.getElementById("main-content");
    this.render();
  }

  render() {
    this.productsContainer.innerHTML = `
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
                  <button class="btn btn-dark text-white w-100 add-to-cart-btn" 
                    data-name="${product.name}"
                    data-image="${product.image}"
                    data-description="${product.description}">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;

    this.productsContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("add-to-cart-btn")) {
        const { name, image, description } = event.target.dataset;
        this.cart.addToCart(name, image, description);
      }
    });
  }
}

class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("cart")) || [];
    this.navbar = new NavBar();
    this.updateCartCount();
  }

  addToCart(name, image, description) {
    if (!this.items.some((item) => item.name === name)) {
      this.items.push({ name, image, description });
      localStorage.setItem("cart", JSON.stringify(this.items));
      this.updateCartCount();
    } else {
      alert("Item already in the cart!");
    }
  }

  updateCartCount() {
    this.navbar.updateCartCount(this.items.length);
  }

  displayCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    if (!cartItemsContainer) return;

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
          <button class="btn btn-danger btn-sm remove-from-cart-btn" data-name="${item.name}">Remove</button>
        </div>
      `
        )
        .join("");
    }

    cartItemsContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("remove-from-cart-btn")) {
        const { name } = event.target.dataset;
        this.removeFromCart(name);
      }
    });
  }

  removeFromCart(name) {
    this.items = this.items.filter((item) => item.name !== name);
    localStorage.setItem("cart", JSON.stringify(this.items));
    this.displayCart();
    this.updateCartCount();
  }
}

const sampleProducts = [
  { name: "Product 1", description: "Description of Product 1", image: "assets/image/1.webp" },
  { name: "Product 2", description: "Description of Product 2", image: "assets/image/2.webp" },
  { name: "Product 3", description: "Description of Product 3", image: "assets/image/3.webp" },
  { name: "Product 4", description: "Description of Product 4", image: "assets/image/4.webp" },
  { name: "Product 5", description: "Description of Product 5", image: "assets/image/5.webp" },
  { name: "Product 6", description: "Description of Product 3", image: "assets/image/3.webp" },
  { name: "Product 7", description: "Description of Product 4", image: "assets/image/4.webp" },
  { name: "Product 8", description: "Description of Product 5", image: "assets/image/5.webp" },
];

const cart = new Cart();

if (document.getElementById("main-content")) {
  new NavBar();
  new Products(sampleProducts, cart);
  new Footer();
}

if (document.getElementById("cart-items")) {
  new NavBar();
  cart.displayCart();
}
