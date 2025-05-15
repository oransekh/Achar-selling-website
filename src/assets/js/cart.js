// Get existing cart from localStorage or start with an empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productIndex) {
  const product = products[productIndex];

  // Push selected product to the cart array
  cart.push(product);

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Alert or toast
  alert(`${product.name} added to cart!`);
}
