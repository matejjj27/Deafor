class Product {
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }

    viewInfo() {
        alert("Showing information about product.");
    }
}
class Clothing extends Product {
    constructor(name, price, color, size) {
        super(name, price, color);
        this.size = size;
    }
}
class Electronics extends Product {
    constructor(name, price, color, type) {
        super(name, price, color);
        this.type = type;
    }
}
class Books extends Product {
    constructor(name, price, color, author) {
        super(name, price, color);
        this.author = author;
    }
}

// let tShirt = new Clothes("Adidas T", 19, "white", "L");
// let JBLSpeaker = new Electronics("JBL Speaker Small", 49, "grey", "speaker");

const products = [];

products.push(new Clothing('T-Shirt', 19.99, 'L', 'Blue'));
products.push(new Electronics('Smartphone', 599.99, '5.5 inches', 'Black'));
products.push(new Books('The Great Gatsby', 9.99, 'Green', 'F. Scott Fitzgerald'));

const productList = document.querySelector('#product-list');

products.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');
  productDiv.innerHTML = `
    <h3>${product.name}</h3>
    <p>Price: $${product.price.toFixed(2)}</p>
    <p>Size: ${product.size}</p>
    <p>Color: ${product.color}</p>
    <button class="add-to-cart">Add to Cart</button>
  `;
  productList.appendChild(productDiv);

  const addToCartBtn = productDiv.querySelector('.add-to-cart');
  addToCartBtn.addEventListener('click', () => {
    addToCart(product);
  });
});

function addToCart(product) {
  alert(`${product.name} was added to Cart`);
}