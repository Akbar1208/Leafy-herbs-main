
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login Successful!');
    var modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
    modal.hide();
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Signup Successful!');
    var modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
    modal.hide();
});



const buy = document.getElementById('addcart');
buy.addEventListener('click', () => {
    alert('Product has been added!');
});



// Validate Name: Only allows characters (A-Z, a-z)
function validateName() {
  const nameInput = document.getElementById('name');
  nameInput.value = nameInput.value.replace(/[^a-zA-Z ]/g, '');  // Only characters and spaces
}

// Validate Email: Checks if the email is in valid format
function validateEmail() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    emailInput.setCustomValidity("Please enter a valid email address.");
  } else {
    emailInput.setCustomValidity("");
  }
}

// Validate Phone: Only allows numbers
function validatePhone() {
  const phoneInput = document.getElementById('phone');
  phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '');  // Only digits
}


