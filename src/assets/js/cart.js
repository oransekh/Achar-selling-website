const cartItemsList = document.getElementById("cart-items-list");
const cartTotal = document.getElementById("cart-total");

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  cartItemsList.innerHTML = "";

  if (cart.length === 0) {
    cartItemsList.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "Rs. 0.00";
    return;
  }

  cart.forEach((product, index) => {
    const quantity = product.quantity || 1;
    total += product.offerPrice * quantity;

    cartItemsList.innerHTML += `
      <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center border-b pb-6 mb-6">
        <div class="sm:col-span-2 w-full sm:w-auto">
          <img src="${product.img}" alt="${
      product.name
    }" class="rounded-xl w-full max-w-[100px] sm:max-w-full shadow-md" />
        </div>

        <div class="sm:col-span-5 text-center sm:text-left">
          <h3 class="text-lg font-semibold text-gray-800">${product.name}</h3>
          <p class="text-gray-500">Rs. ${product.offerPrice.toFixed(2)}</p>
        </div>

        <div class="sm:col-span-3 flex justify-center items-center gap-2 mt-2 sm:mt-0">
          <button onclick="changeQuantity(${index}, -1)" class="w-8 h-8 rounded-full bg-gray-200 text-lg font-bold hover:bg-gray-300">-</button>
          <span class="text-lg font-semibold" id="qty-${index}">${quantity}</span>
          <button onclick="changeQuantity(${index}, 1)" class="w-8 h-8 rounded-full bg-gray-200 text-lg font-bold hover:bg-gray-300">+</button>
          <button onclick="removeItem(${index})" class="text-red-500 ml-3 text-lg hover:text-red-600" title="Remove">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>

        <div class="sm:col-span-2 text-right font-semibold">
          Rs. ${(product.offerPrice * quantity).toFixed(2)}
        </div>
      </div>
    `;
  });

  cartTotal.textContent = `Rs. ${total.toFixed(2)}`;
}

function changeQuantity(index, delta) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart[index]) return;

  cart[index].quantity += delta;

  if (cart[index].quantity < 1) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function addToCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products[index];

  const existingItem = cart.find((item) => item.name === product.name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const cartCountEl = document.getElementById("cart-count");

  if (cartCountEl) {
    cartCountEl.textContent = totalItems;
    cartCountEl.style.display = totalItems > 0 ? "flex" : "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  updateCartCount();
});


