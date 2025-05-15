const sortPrice = document.getElementById("sortPrice");

function renderProducts(productList) {
  productsContainer.innerHTML = "";

  productList.forEach((product, index) => {
    const { img, name, originalPrice, offerPrice, discount } = product;
    const productHTML = `
     <a href="/src/pages/view.html?index=${index}">
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
    productsContainer.innerHTML += productHTML;
  });
}

// Show products initially
renderProducts(products);

// Sorting logic
sortPrice.addEventListener("change", function () {
  let sortedProducts = [...products]; // Clone original array

  if (this.value === "lowToHigh") {
    sortedProducts.sort((a, b) => a.offerPrice - b.offerPrice);
  } else if (this.value === "highToLow") {
    sortedProducts.sort((a, b) => b.offerPrice - a.offerPrice);
  }

  renderProducts(sortedProducts);
});
