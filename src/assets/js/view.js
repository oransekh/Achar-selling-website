// ============================== //
// Same Products to Show on the Buying Page
// ============================== //

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

// Get index from URL
const queryParams = new URLSearchParams(window.location.search);
const productIndex = parseInt(queryParams.get("index"));

const productContainer = document.getElementById("product-detail");

// Check if product exists
if (products[productIndex]) {
  const product = products[productIndex];

  productContainer.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Product Image -->
     <div>
       <img
       src="${product.img}"
       alt="${product.name}"
       class="w-full max-h-[400px] object-cover rounded-xl shadow-md"/>
       </div>


      <!-- Product Info -->
      <div class="flex flex-col justify-center">
        <h1 class="text-2xl font-semibold text-gray-800">
          ${product.name}
        </h1>
        <div class="flex items-center gap-3 mt-2">
          <span class="line-through text-gray-400 text-lg">Rs.${
            product.originalPrice
          }</span>
          <span class="text-xl font-bold text-gray-800">Rs.${
            product.offerPrice
          }</span>
          <span
            class="bg-yellow-400 text-black text-sm font-semibold px-2 py-1 rounded"
          >${product.discount}</span>
        </div>
        <p class="text-sm text-gray-500 mt-2">
          Taxes included. <span class="underline">Shipping</span> calculated at checkout.
        </p>

        <!-- Reviews -->
        <div class="flex items-center gap-1 mt-3">
          <div class="flex text-yellow-400">
            ${"★".repeat(Math.round(product.rating))}
            ${"☆".repeat(5 - Math.round(product.rating))}
          </div>
          <span class="text-sm text-gray-700 ml-1">${
            product.reviews
          } reviews</span>
        </div>

        <!-- Buttons -->
        <div class="mt-4 flex flex-col gap-3">
          <button class="w-full border border-gray-400 text-gray-700 py-2 px-4 rounded hover:bg-gray-100">
            Add to cart
          </button>
          <button class="w-full bg-black text-white py-2 px-4 rounded flex justify-center items-center gap-2">
            BUY NOW
            <img src="/src/assets/img/gpay.png" class="h-5" alt="gpay" />
            <img src="https://www.shyplite.com/img/phonepe.svg" class="h-5" alt="phonepe" />
            <img src="https://www.shyplite.com/img/paytm.svg" class="h-5" alt="paytm" />
          </button>
        </div>
      </div>
    </div>
  `;
} else {
  // Handle invalid index or no product
  productContainer.innerHTML = `
    <div class="text-center py-10">
      <h2 class="text-2xl text-red-500 font-semibold">Product not found</h2>
      <a href="../index.html" class="text-blue-600 underline mt-4 inline-block">Go back to homepage</a>
    </div>
  `;
}
