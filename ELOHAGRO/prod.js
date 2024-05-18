


// Get the cart list element
const cartList = document.getElementById("cart-list");

// Get the subtotal element
const subtotalElement = document.getElementById("subtotal");

// Get the checkout button
const checkoutButton = document.getElementById("checkout-btn");

// Get the update cart button
const updateCartButton = document.getElementById("update-cart-btn");

// Create an empty cart object
let cart = {};

// Add event listener to the add-to-cart buttons
document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const productId = event.target.dataset.productId;
    const productName = event.target.parentNode.querySelector("h4").textContent;
    const productPrice = +event.target.parentNode.querySelector("p").textContent.replace("A ", "").replace(".", "");
    const productQuantity = 1;

    // Add the product to the cart
    if (cart[productId]) {
      cart[productId].quantity += 1;
    } else {
      cart[productId] = { name: productName, price: parseFloat(productPrice), quantity: 1 };
    }

    // Update the cart list
    updateCartList();

    // Update the subtotal
    updateSubtotal();
  });
});

// Add event listener to the update cart button
updateCartButton.addEventListener("click", () => {
  // Clear the cart
  cart = {};

  // Update the cart list
  updateCartList();

  // Update the subtotal
  updateSubtotal();
});

// Update the cart list
function updateCartList() {
  cartList.innerHTML = "";
  Object.keys(cart).forEach((productId) => {
    const cartItem = cart[productId];
    const cartItemElement = document.createElement("li");
    cartItemElement.textContent = `${cartItem.name} x ${cartItem.quantity} = ₦${cartItem.price * cartItem.quantity}`;
    cartList.appendChild(cartItemElement);
  });
}

// Update the subtotal
function updateSubtotal() {
  let subtotal = 0;
  Object.keys(cart).forEach((productId) => {
    subtotal += cart[productId].price * cart[productId].quantity;
  });
  subtotalElement.textContent = `Subtotal: ₦${subtotal.toFixed(2)}`;
}

// Add event listener to the checkout button
checkoutButton.addEventListener("click", () => {
  let totalAmount = 0;
  Object.keys(cart).forEach((productId) => {
    totalAmount += cart[productId].price * cart[productId].quantity;
  });
  alert(`Total amount for checkout: ₦${totalAmount.toFixed(2)}`);
});






// // Get references to the DOM elements
// const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
// const cartList = document.getElementById('cart-list');
// const subtotal = document.getElementById('subtotal');
// const updateCartBtn = document.getElementById('update-cart-btn');
// const checkoutBtn = document.getElementById('checkout-btn');
// const cartModal = document.getElementById('cart-modal');
// const cartNumberContainer = document.querySelector('.cart-number-container');

// // Initialize variables
// let cart = [];
// let subtotalAmount = 0;

// // Add event listeners to the "Add to Cart" buttons
// addToCartBtns.forEach(btn => {
//   btn.addEventListener('click', addToCart);
// });

// // Add event listeners to the "Update Cart" and "Checkout" buttons
// updateCartBtn.addEventListener('click', updateCart);
// checkoutBtn.addEventListener('click', checkout);

// // Function to add an item to the cart
// function addToCart(event) {
//   const productId = event.target.dataset.productId;
//   const product = products.find(p => p.id === parseInt(productId));
//   cart.push(product);
//   updateCart();
//   showCartModal();
// }

// // Function to update the cart list and subtotal
// function updateCart() {
//   cartList.innerHTML = '';
//   subtotalAmount = 0;
//   cart.forEach(item => {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${item.name} - $${item.price}`;
//     cartList.appendChild(listItem);
//     subtotalAmount += item.price;
//   });
//   subtotal.textContent = `Subtotal: $${subtotalAmount.toFixed(2)}`;
//   cartNumberContainer.textContent = cart.length;
// }

// // Function to show the cart modal
// function showCartModal() {
//   cartModal.modal('show');
// }

// // Function to checkout
// function checkout() {
//   alert(`Checkout amount: $${subtotalAmount.toFixed(2)}`);
//   cart = [];
//   updateCart();
//   cartModal.modal('hide');
// }