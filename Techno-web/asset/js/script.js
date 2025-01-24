// Array of product objects
const products = [
  {
    id: 1,
    name:"product 1",
    price: "12",
    image: ".\\asset\\image\\image-1.png",
  },
  {
    id: 2,
    name: "product 2",
    price: "10",
    image: ".\\asset\\image\\image-2.png",
  },
  {
    id: 3,
    name: "product 3",
    price: "8",
    image: ".\\asset\\image\\image-3.png",
  },
  {
    id: 4,
    name: "product 4",
    price: "10",
    image: ".\\asset\\image\\image-4.png",
  },
  {
    id: 5,
    name: "product 5",
    price: "9",
    image: ".\\asset\\image\\image-5.png",
  },
  {
    id: 6,
    name: "product 6",
    price: "10",
    image: ".\\asset\\image\\image-6.png",
  },
  {
    id: 7,
    name: "product 7",
    price: "9",
    image: ".\\asset\\image\\image-7.png",
  },
  {
    id: 8,
    name: "product 8",
    price: "7",
    image: ".\\asset\\image\\image-8.png",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);

// Render products on the index page
if (document.getElementById("products")) {
  const productContainer = document.getElementById("products");
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "col-md-3 mb-4";

    productElement.innerHTML = `<div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
              <h5 class="card-title fw-medium fs-4">${product.name}</h5>
              <p class="card-text fw-semibold fs-5">$${product.price}</p>
              <button class="btn btn-dark" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
      </div>`;
    productContainer.appendChild(productElement);
  });
}

// Render cart on cart page
if (document.getElementById("my-cart")) {
  updateCart();
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById("my-cart");
    const totalContainer = document.getElementById("total");
  
    if (cartItemsContainer && totalContainer) {
      cartItemsContainer.innerHTML = "";
      let total = 0;
  
      cart.forEach((product, index) => {
        const cartItem = document.createElement("tr");
        cartItem.innerHTML = `<td><img src="${product.image}" alt="${product.name}" style="width: 100px; height: auto;"></td>
                              <td>${product.name}</td>
                              <td>$${product.price}</td>
                              <td>${product.quantity}</td>
                              <td>$${(product.price * product.quantity).toFixed(2)}</td>
                              <td><button class="btn bg-secondary text-light " onclick="removeFromCart(${index})">Remove</button></td>`;
        cartItemsContainer.appendChild(cartItem);
        total += parseFloat(product.price) * product.quantity;
      });
      totalContainer.innerText = `TOTAL: $${total.toFixed(2)}`;
    }
  }
  
  function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCountElement.innerText = totalItems;
    }
  }
  
  function removeFromCart(index) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
    } else {
      cart.splice(index, 1);
    }
    localStorage.setItem(`cart_${loggedInUser}`, JSON.stringify(cart));
    updateCart();
    updateCartCount();
  }

function removeFromCart(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  updateCartCount();
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  if (document.getElementById("my-cart")) {
    updateCart();
  }
});

// // User authentication variables
// let loggedInUser = localStorage.getItem("loggedInUser");

// // Initialize cart for the logged-in user
// let cart = loggedInUser ? JSON.parse(localStorage.getItem(`cart_${loggedInUser}`)) || [] : [];
// console.log(cart);

// // Render products on the index page
// if (document.getElementById("products")) {
//   const productContainer = document.getElementById("products");
//   products.forEach((product) => {
//     const productElement = document.createElement("div");
//     productElement.className = "col-md-3 mb-4";

//     productElement.innerHTML = `<div class="card">
//           <img src="${product.image}" class="card-img-top" alt="${product.name}">
//           <div class="card-body">
//               <h5 class="card-title fw-medium fs-4">${product.name}</h5>
//               <p class="card-text fw-semibold fs-5">$${product.price}</p>
//               <button class="btn btn-dark" onclick="addToCart(${product.id})">Add to Cart</button>
//           </div>
//       </div>`;
//     productContainer.appendChild(productElement);
//   });
// }

// // Render cart on cart page
// if (document.getElementById("my-cart")) {
//   updateCart();
// }

// function addToCart(productId) {
//   const product = products.find((p) => p.id === productId);
//   const cartItem = cart.find((item) => item.id === productId);

//   if (cartItem) {
//     cartItem.quantity++;
//   } else {
//     cart.push({ ...product, quantity: 1 });
//   }
//   console.log(cart);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartCount();
//   updateCart();
// }

// function updateCart() {
//   const cartItemsContainer = document.getElementById("my-cart");
//   const totalContainer = document.getElementById("total");

//   if (cartItemsContainer && totalContainer) {
//     cartItemsContainer.innerHTML = "";
//     let total = 0;

//     cart.forEach((product, index) => {
//       const cartItem = document.createElement("tr");
//       cartItem.innerHTML = `<td>${product.name}</td>
//                             <td>$${product.price}</td>
//                             <td>${product.quantity}</td>
//                             <td>$${(product.price * product.quantity).toFixed(2)}</td>
//                             <td><button class="btn btn-dark" onclick="removeFromCart(${index})">Remove</button></td>`;
//       cartItemsContainer.appendChild(cartItem);
//       total += parseFloat(product.price) * product.quantity;
//     });
//     totalContainer.innerText = `TOTAL: $${total.toFixed(2)}`;
//   }
// }

// function updateCartCount() {
//   const cartCountElement = document.getElementById("cart-count");
//   if (cartCountElement) {
//     const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//     cartCountElement.innerText = totalItems;
//   }
// }

// function removeFromCart(index) {
//   if (cart[index].quantity > 1) {
//     cart[index].quantity--;
//   } else {
//     cart.splice(index, 1);
//   }
//   localStorage.setItem(`cart_${loggedInUser}`, JSON.stringify(cart));
//   updateCart();
//   updateCartCount();
// }

// // User login functionality
// document.getElementById("loginForm")?.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   if (!email || !password) {
//     alert("Please fill in all fields.");
//     return;
//   }

//   const existingUser = JSON.parse(localStorage.getItem(email));

//   if (existingUser && existingUser.password === password) {
//     loggedInUser = email;
//     localStorage.setItem("loggedInUser", email);
//     alert("Login successful!");
//     window.location.href = "index.html"; // Redirect to index page
//   } else {
//     alert("Invalid email or password.");
//   }
// });

// // Initial load
// document.addEventListener("DOMContentLoaded", () => {
//   if (loggedInUser) {
//     cart = JSON.parse(localStorage.getItem(`cart_${loggedInUser}`)) || [];
//   }
//   updateCartCount();
//   if (document.getElementById("my-cart")) {
//     updateCart();
//   }
// });






// // Render products on the index page
// if (document.getElementById("products")) {
//   const productContainer = document.getElementById("products");
//   products.forEach((product) => {
//     const productElement = document.createElement("div");
//     productElement.className = "col-md-3 mb-4";

//     productElement.innerHTML = `<div class="card">
//           <img src="${product.image}" class="card-img-top" alt="${product.name}">
//           <div class="card-body">
//               <h5 class="card-title fw-medium fs-4">${product.name}</h5>
//               <p class="card-text fw-semibold fs-5">$${product.price}</p>
//               <button class="btn btn-dark" onclick="addToCart(${product.id})">Add to Cart</button>
//           </div>
//       </div>`;
//     productContainer.appendChild(productElement);
//   });
// }

// // Render cart on cart page
// if (document.getElementById("my-cart")) {
//   updateCart();
// }

// // document.addEventListener("DOMContentLoaded", function () {
// //   const searchIcon = document.getElementById("search-icon");
// //   const searchBar = document.getElementById("search-bar");
// //   const searchResults = document.getElementById("search-results");

// //   document.addEventListener("DOMContentLoaded", () => {
// //     const loginForm = document.getElementById("loginForm");
// //     const loginSection = document.getElementById("login-section");
// //     const logoutSection = document.getElementById("logout-section");
// //     const emailInput = document.getElementById("email");
// //     const passwordInput = document.getElementById("password");
  
// //     let users = JSON.parse(localStorage.getItem("users")) || [];
// //     let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
  
// //     // Show/hide login or logout buttons based on user session
// //     function updateAuthUI() {
// //       if (currentUser) {
// //         loginSection.classList.add("d-none");
// //         logoutSection.classList.remove("d-none");
// //       } else {
// //         loginSection.classList.remove("d-none");
// //         logoutSection.classList.add("d-none");
// //       }
// //     }
  
// //     // Handle login form submission
// //     loginForm.addEventListener("submit", (e) => {
// //       e.preventDefault();
  
// //       const email = emailInput.value.trim();
// //       const password = passwordInput.value.trim();
  
// //       const user = users.find((u) => u.email === email && u.password === password);
// //       if (user) {
// //         currentUser = user;
// //         localStorage.setItem("currentUser", JSON.stringify(currentUser));
// //         alert("Login successful!");
// //         updateAuthUI();
// //       } else {
// //         alert("Invalid email or password. Please try again.");
// //       }
// //     });
  
// //     // Handle logout button click
// //     document.getElementById("logout-btn").addEventListener("click", () => {
// //       currentUser = null;
// //       localStorage.removeItem("currentUser");
// //       alert("You have been logged out.");
// //       updateAuthUI();
// //     });
  
// //     // Initialize UI state
// //     updateAuthUI();
// //   });
  

//   // Toggle the search bar visibility
//   searchIcon.addEventListener("click", () => {
//     searchBar.classList.toggle("d-none");
//     if (!searchBar.classList.contains("d-none")) {
//       searchBar.focus();
//     }
//   });

//   // Search functionality
//   searchBar.addEventListener("input", (e) => {
//     const searchQuery = e.target.value.toLowerCase();
//     const filteredProducts = products.filter((product) =>
//       product.name.toLowerCase().includes(searchQuery)
//     );
//     renderSearchResults(filteredProducts);
//   });

//   // Render search results
//   function renderSearchResults(filteredProducts) {
//     searchResults.innerHTML = ""; // Clear previous results

//     if (filteredProducts.length === 0) {
//       searchResults.innerHTML = `<p class="text-muted">No products found.</p>`;
//       return;
//     }

//     filteredProducts.forEach((product) => {
//       const productElement = document.createElement("div");
//       productElement.className = "col-md-3 mb-4";

//       productElement.innerHTML = `
//         <div class="card">
//           <img src="${product.image}" class="card-img-top" alt="${product.name}">
//           <div class="card-body">
//             <h5 class="card-title">${product.name}</h5>
//             <p class="card-text">$${product.price}</p>
//             <button class="btn btn-dark" onclick="addToCart(${product.id})">Add to Cart</button>
//           </div>
//         </div>
//       `;

//       searchResults.appendChild(productElement);
//     });
//   };







// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// if (document.getElementById("products")) {
//   const productContainer = document.getElementById("products");
//   products.forEach((product) => {
//     const productElement = document.createElement("div");
//     productElement.className = "col-md-3 mb-4";

//     productElement.innerHTML = `<div class="card">
//           <img src="${product.image}" class="card-img-top image " alt="${product.name}">
//           <div class="card-body">
//               <h5 class="card-title fw-medium fs-4">${product.name}</h5>
//               <p class="card-text fw-semibold fs-5">$${product.price}</p>
//               <button class="btn btn-dark" onclick="addToCart(${product.id})">Add to Cart</button>
//           </div>
//       </div>`;
//     productContainer.appendChild(productElement);
//   });
// }

// if (document.getElementById("my-cart")) {
//   updateCart();
// }

// function addToCart(productId) {
//   if (!currentUser) {
//     alert("You must log in to add items to the cart.");
//     return;
//   }

//   const product = products.find((p) => p.id === productId);
//   const cartItem = cart.find((item) => item.id === productId);
//   if (cartItem) {
//     cartItem.quantity++;
//   } else {
//     cart.push({ ...product, quantity: 1 });
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));

//   updateCartCount();
//   updateCart();

//   alert(`${product.name} has been added to the cart.`);
// }

// function updateCart() {
//   const cartItemsContainer = document.getElementById("my-cart");
//   const totalContainer = document.getElementById("total");

//   if (cartItemsContainer && totalContainer) {
//     cartItemsContainer.innerHTML = "";
//     let total = 0;
//     cart.forEach((product, index) => {
//       const cartItem = document.createElement("li");
//       cartItem.className =
//         "list-group-item d-flex justify-content-between align-items-center";
//       cartItem.innerHTML = `<div class="cart-item-details">
//               <img src="${product.image}" alt="${product.name}" class="img-thumbnail mr-3" style="width: 100px;">
//               <span class="fw-bolder ms-2 fs-5">${product.name} - $${product.price} x ${product.quantity}</span>
//           </div>
//           <button class="btn btn-dark" onclick="removeFromCart(${index})">Remove</button>`;
//       cartItemsContainer.appendChild(cartItem);
//       total += parseFloat(product.price) * product.quantity;
//     });
//     totalContainer.innerText = `TOTAL: $${total.toFixed(2)}`;
//   }
// }

// function updateCartCount() {
//   const cartCountElement = document.getElementById("cart-count");
//   if (cartCountElement) {
//     const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//     cartCountElement.innerText = totalItems;
//   }
// }

// function removeFromCart(index) {
//   if (cart[index].quantity > 1) {
//     cart[index].quantity--;
//   } else {
//     cart.splice(index, 1);
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCart();
//   updateCartCount();
// }

// document.addEventListener("DOMContentLoaded", () => {
//   updateCartCount();
//   if (document.getElementById("my-cart")) {
//     updateCart();
//   }
// });

