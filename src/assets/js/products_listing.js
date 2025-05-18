// ============================ //
// Products Listing
// ============================ //

const products = [
  {
    img: "/src/assets/img/img1.jpeg",
    name: "Desi Ghee Coconut Cookies - 250g",
    originalPrice: 199.0,
    offerPrice: 129.0,
    discount: "35% OFF",
    rating: 4.3,
    reviews: 22,
  },
  {
    img: "/src/assets/img/img3.jpeg",
    name: "Traditional Jaggery Thekua - 200g",
    originalPrice: 249.0,
    offerPrice: 149.0,
    discount: "40% OFF",
    rating: 4.7,
    reviews: 18,
  },
  {
    img: "/src/assets/img/img2.jpeg",
    name: "Wheat Flour Mithai Bites - 300g",
    originalPrice: 299.0,
    offerPrice: 189.0,
    discount: "37% OFF",
    rating: 4.5,
    reviews: 30,
  },
];

//==================================//
//render the products on the fronted
//=================================//

const productsList = document.getElementById("products-listing");

products.forEach((product, index) => {
  const { img, name, originalPrice, offerPrice, discount } = product;
  productsList.innerHTML += `<a href="/src/pages/view.html?index=${index}">
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div class="relative">
        <img
          src="${img}"
          alt="${name}"
          class="w-full h-64 object-cover"
        />
        <span
          class="absolute bottom-2 left-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded"
        >${discount}</span>
      </div>
      <div class="p-4">
        <h3 class="text-gray-800 font-medium">${name}</h3>
        <div class="mt-2 space-x-2">
          <span class="line-through text-gray-400 text-sm">Rs. ${originalPrice}</span>
          <span class="text-gray-800 font-semibold">Rs. ${offerPrice}</span>
        </div>
      </div>
    </div>
    </a>
  `;
});

// ================
// Add to Cart
// ================
function addToCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const productToAdd = { ...products[index], quantity: 1 };
  cart.push(productToAdd);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// ================
// Update Cart Count on Icon
// ================
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = cart.length;
  const cartCountEl = document.getElementById("cart-count");

  if (cartCountEl) {
    cartCountEl.textContent = cartCount;
    cartCountEl.style.display = cartCount > 0 ? "flex" : "none";
  }
}

document.addEventListener("DOMContentLoaded", updateCartCount);
