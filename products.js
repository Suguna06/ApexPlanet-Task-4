const products = [
  {
    title: "iPhone 14",
    category: "electronics",
    price: 999,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-model-unselect-gallery-1-202209?wid=512&hei=512"
  },
  {
    title: "MacBook Air",
    category: "electronics",
    price: 1299,
    image: "https://m.media-amazon.com/images/I/71TPda7cwUL.AC_SL1500.jpg"
  },
  {
    title: "The Alchemist",
    category: "books",
    price: 15,
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.AC_UF1000,1000_QL80.jpg"
  },
  {
    title: "Sony Headphones",
    category: "electronics",
    price: 199,
    image: "headphones.jpg"
  },
  {
    title: "Atomic Habits",
    category: "books",
    price: 18,
    image: "https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg"
  },

  {
    title: "Nike Air Sneakers",
    category: "fashion",
    price: 120,
    image: "Nike Air Sneakers.webp"
  },
  
  {
    title: "Backpack",
    category: "fashion",
    price: 45,
    image: "Backpack.webp"
  },
  {
    title: "Kindle eReader",
    category: "electronics",
    price: 89,
    image: "Kindle eReader.jpg"
  },
  {
    title: "Bluetooth Speaker",
    category: "electronics",
    price: 60,
    image: "bluetooth speaker.webp"
  },
    
  {
    title: "Smart Watch",
    category: "electronics",
    price: 150,
    image: "smart watch.jpeg"
  },
  
];



const grid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const sortBy = document.getElementById("sortBy");

function renderProducts(list) {
  grid.innerHTML = "";
  list.forEach(product => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}">
        <div class="product-title">${product.title}</div>
        <div class="product-price">Price: $${product.price}</div>
        <button>Buy Now</button>
      </div>
    `;
  });
}

function applyFilters() {
  let filtered = [...products];

  const category = categoryFilter.value;
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  const sort = sortBy.value;
  if (sort === "priceLow") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

categoryFilter.addEventListener("change", applyFilters);
sortBy.addEventListener("change", applyFilters);

// Initial display
renderProducts(products);