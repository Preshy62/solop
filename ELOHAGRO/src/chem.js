// JavaScript code for Elo Hagro Market Place

// Initialize the cart object
var cart = {};

// Function to add product to cart
function addToCart(productId, quantity) {
  if (cart[productId]) {
    cart[productId].quantity += quantity;
  } else {
    cart[productId] = {
      quantity: quantity,
      price: getProductPrice(productId)
    };
  }
  updateCart();
}

// Function to update cart
function updateCart() {
  var subtotal = 0;
  var cartItems = '';
  for (var productId in cart) {
    var product = cart[productId];
    subtotal += product.price * product.quantity;
    cartItems += '<li>' + productId + ' x ' + product.quantity + '</li>';
  }
  $('#cart-list').html(cartItems);
  $('#subtotal').text('Subtotal: ' + subtotal.toFixed(2));
}

// Function to get product price
function getProductPrice(productId) {
  // TO DO: implement logic to retrieve product price from database or API
  return 10.99; // placeholder price
}

// Event listeners for add to cart buttons
$('.add-to-cart-btn').on('click', function() {
  var productId = $(this).data('product-id');
  var quantity = 1; // default quantity
  addToCart(productId, quantity);
});

// Event listener for cart update button
$('#update-cart-btn').on('click', function() {
  updateCart();
});

// Event listener for checkout button
$('#checkout-btn').on('click', function() {
  // TO DO: implement logic to redirect to checkout page
  alert('Checkout functionality not implemented yet!');
});