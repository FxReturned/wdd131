const products = [
    {
      id: 1,
      name: "Decadent Chocolate Cake",
      description: "Indulge in layers of rich chocolate sponge filled with velvety ganache, topped with delicate chocolate shavings and fresh raspberries. A must-try for true chocolate lovers.",
      price: 25.99,
      image: "images/chocolate-cake.jpg"
    },
    {
      id: 2,
      name: "Strawberry Cheesecake",
      description: "Enjoy our creamy cheesecake on a buttery graham cracker crust, crowned with vibrant fresh strawberries and a drizzle of strawberry sauce for the perfect balance of tangy and sweet.",
      price: 29.99,
      image: "images/strawberry-cheesecake.jpg"
    },
    {
      id: 3,
      name: "Fresh Fruit Tart",
      description: "Savor a crisp pastry shell filled with silky pastry cream and adorned with an array of seasonal fruits. A refreshing burst of natural flavors in every bite.",
      price: 24.99,
      image: "images/fresh-fruit-tart.jpg"
    },
    {
        id: 4,
        name: "Assorted Macarons",
        description: "Experience a taste of Paris with our colorful macarons, featuring a delicate crisp shell and smooth, flavorful filling. Perfect for any celebration or a sweet treat anytime.",
        price: 18.99,
        image: "images/assorted-macarons.jpg"
    },
    {
        id: 5,
        name: "Red Velvet Cupcake",
        description: "Delight in a classic red velvet cupcake with moist cake and luscious cream cheese frosting, lightly dusted with cocoa powder. A timeless treat for every occasion.",
        price: 6.99,
        image: "images/red-velvet-cupcake.jpg"
    }
  ];
  
  function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
  
  function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function addToCart(productId) {
    let cart = getCart();
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    saveCart(cart);
    alert(`${product.name} has been added to the cart.`);
    
    if (document.getElementById('cart-items')) {
      displayCart();
    }
  }
  
  function displayProducts() {
    const productList = document.getElementById('product-list');
    if (productList) {
      productList.innerHTML = products.map(product => `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `).join('');
    }
  }
  
  function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cart = getCart();
    
    if (cartItemsDiv) {
      if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
      } else {
        cartItemsDiv.innerHTML = cart.map(item => `
          <div class="cart-item">
            <h4>${item.name}</h4>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        `).join('');
      }
      displayCartTotal();
    }
  }
  
  function displayCartTotal() {
    const cart = getCart();
    const totalDiv = document.getElementById('cart-total');
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (totalDiv) {
      totalDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
    }
  }
  
  function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    displayCart();
  }
  
  document.addEventListener('DOMContentLoaded', () => {

    displayProducts();
    
    if (document.getElementById('cart-items')) {
      displayCart();
    }
    
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you for your purchase!");
        localStorage.removeItem('cart');
        document.getElementById('cart-items').innerHTML = "<p>Your cart is empty.</p>";
        document.getElementById('cart-total').innerHTML = "";
        checkoutForm.reset();
      });
    }
  });
  
  const currentYear = new Date().getFullYear();
  const copyrightYearElement = document.getElementById('currentyear');
  copyrightYearElement.textContent = currentYear;

  document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
  });