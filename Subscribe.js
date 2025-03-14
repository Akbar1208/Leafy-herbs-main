const subscribe = document.getElementById('subscribe');

subscribe.addEventListener('click', () => {
    const emailInput = document.getElementById('newsletter');
    const email = emailInput.value.trim(); // Get the latest value

    // Email pattern for validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // If the email is empty
    if (email === '') {
        alert('Please enter an email address.');
        return;
    }

    // Validate email format
    if (!emailPattern.test(email)) {
        emailInput.setCustomValidity("Please enter a valid email address.");
        alert('Invalid email address');
    } else {
        emailInput.setCustomValidity(""); // Reset custom validity
        alert(`Thank you for subscribing! You will receive updates at ${email}`);
        document.getElementById('newsletter').value='';

    }
});




const cart = [
    {
      id: 1,
      name: "Aloevera Gel 50 gm",
      price: 40,
      image: "./assets/aloe-vera.avif",
      quantity: 1,
    },
    {
      id: 2,
      name: "Blueberry Gel 100 gm",
      price: 100,
      image: "./assets/blueberry-gel.avif",
      quantity: 1,
    },
    {
      id: 3,
      name: "Saffron Glow Gel",
      price: 150,
      image: "./assets/saffron-gel.avif",
      quantity: 1,
    },
    {
      id: 4,
      name: "Anti Acne Face Wash",
      price: 150,
      image: "./assets/sandal-wood-facewash.avif",
      quantity: 1,
    },
    {
      id: 5,
      name: "Goat Milk Manjistha Soap",
      price: 70,
      image: "./assets/goat-milk-soap.png",
      quantity: 1,
    },
      {
        id: 6,
        name: "Aloe Vera Turmeric Soap",
        price: 55,
        image: "./assets/aloe-vera-turmeric-soap.jpg",
        quantity: 1
      },
      {
        id: 7,
        name: "Lavender Chamomile Soap",
        price: 80,
        image: "./assets/lavender-chamomile-soap.jpg",
        quantity: 2
      },
      {
        id: 8,
        name: "Coconut Milk Rose Soap",
        price: 90,
        image: "./assets/coconut-milk-rose-soap.avif",
        quantity: 3
      },
      {
        id: 9,
        name: "Neem aleover gel",
        price: 65,
        image: "./assets/neem-aleovera-gel.avif",
        quantity: 5
      },
      {
        id: 10,
        name: "Peppermint Eucalyptus Soap",
        price: 75,
        image: "./assets/cucumber-slices-soap.avif",
        quantity: 4
      },
        {
          id: 11,
          name: "Green Tea Matcha Soap",
          price: 85,
          image: "./assets/green-tea-matcha.jpg",
          quantity: 2
        },
        {
          id: 12,
          name: "Oatmeal Honey Soap",
          price: 60,
          image: "./assets/oatmeal-honey-soap.jpg",
          quantity: 3
        },
        {
          id: 13,
          name: "Charcoal Mint Soap",
          price: 95,
          image: "./assets/charcoal-mint-soap.avif",
          quantity: 4
        },
        {
          id: 14,
          name: "Saffron Almond cream",
          price: 100,
          image: "./assets/saffron-almond-cream.avif",
          quantity: 1
        },
        {
          id: 15,
          name: "Tea Tree Citrus Soap",
          price: 70,
          image: "./assets/tea-tree-citrus-soap.avif",
          quantity: 6
        }
            
        
  ];

  function updateCart() {
    const cartBody = document.getElementById("cart-body");
    cartBody.innerHTML = "";
    let grandTotal = 0;
    cart.forEach((product) => {
      const row = document.createElement("tr");
      row.innerHTML = `
    <td>${product.name}</td>
    <td><img src="${product.image}" alt="${product.name}" width="50"></td>
    <td>${product.price} ₹</td>
    <td><input type="number" value="${
      product.quantity
    }" min="1" class="form-control w-50" onchange="updateQuantity(${
        product.id
      }, this.value)"></td>
    <td>${product.price * product.quantity} ₹</td>
    <td><button class="btn btn-danger" onclick="removeFromCart(${
      product.id
    })">Remove</button></td>
`;
      cartBody.appendChild(row);
      grandTotal += product.price * product.quantity;
    });
    document.getElementById("grand-total").innerText = grandTotal;
  }

  function updateQuantity(id, quantity) {
    const product = cart.find((p) => p.id === id);
    if (product) {
      product.quantity = parseInt(quantity);
      updateCart();
    }
  }

  function removeFromCart(id) {
    const index = cart.findIndex((p) => p.id === id);
    if (index !== -1) {
      cart.splice(index, 1);
      updateCart();
    }
  }

  document.addEventListener("DOMContentLoaded", updateCart);

  document
    .getElementById("logoutBtn")
    .addEventListener("click", function () {
      window.location.href = "about:blank"; // Closes the session
    });

  document.getElementById("buynow").addEventListener("click", function () {
    alert("Order placed successfully!");
  });


  