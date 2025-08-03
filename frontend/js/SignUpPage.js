// Toggle between login/signup
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

// User data storage
let users = JSON.parse(localStorage.getItem("users")) || [];

// DOM Elements
const popupOverlay = document.getElementById("popup-overlay");
const thoughtPopup = document.getElementById("thought-popup");
const successPopup = document.getElementById("success-popup");

// Signup Form
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  if (validateSignup()) {
    const user = {
      name: document.getElementById("signup-name").value.trim(),
      email: document.getElementById("signup-email").value.trim().toLowerCase(),
      password: document.getElementById("signup-password").value,
      dob: document.getElementById("signup-dob").value,
      gender: document.getElementById("signup-gender").value,
      createdAt: new Date().toISOString()
    };
    
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    
    showSuccessPopup();
    signupForm.reset();
  }
});

// Login Form
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const email = document.getElementById("login-email").value.trim().toLowerCase();
  const password = document.getElementById("login-password").value;
  
  clearErrors();
  
  // Check if user exists and password matches
  const user = users.find(u => u.email === email);
  
  if (!user) {
    showError("login-email-error", "Email not found");
    return;
  }
  
  if (user.password !== password) {
    showError("login-password-error", "Incorrect password");
    return;
  }
  
  // If we get here, login is successful
  showThoughtPopup();
});

// Show Thought Popup
function showThoughtPopup() {
  console.log("Showing thought popup"); // Debug log
  popupOverlay.classList.add("popup-active");
  thoughtPopup.classList.add("popup-active");
  
  // Initialize character counter
  const thoughtText = document.getElementById("thought-text");
  const charCount = document.getElementById("char-count");
  
  thoughtText.addEventListener("input", function() {
    const currentLength = this.value.length;
    charCount.textContent = currentLength;
    charCount.style.color = currentLength > 250 ? "var(--error)" : "var(--text-secondary)";
  });
}

// Thought Popup Handlers
document.getElementById("submit-thought").addEventListener("click", (e) => {
  e.preventDefault();
  redirectToHome();
});

document.getElementById("continue-btn").addEventListener("click", (e) => {
  e.preventDefault();
  redirectToHome();
});

document.getElementById("close-thought").addEventListener("click", () => {
  redirectToHome();
});

// Success Popup
function showSuccessPopup() {
  popupOverlay.classList.add("popup-active");
  successPopup.classList.add("popup-active");
}

document.getElementById("close-success").addEventListener("click", () => {
  popupOverlay.classList.remove("popup-active");
  successPopup.classList.remove("popup-active");
});

// Redirect to Home
function redirectToHome() {
  popupOverlay.classList.remove("popup-active");
  thoughtPopup.classList.remove("popup-active");
  window.location.href = "Home.html";
}

// Validation functions
function validateSignup() {
  clearErrors();
  let isValid = true;

  // Name validation
  const name = document.getElementById("signup-name").value.trim();
  if (!name) {
    showError("name-error", "Name is required");
    isValid = false;
  } else if (!/^[A-Za-z ]{2,50}$/.test(name)) {
    showError("name-error", "Name should be 2-50 letters");
    isValid = false;
  }

  // Email validation
  const email = document.getElementById("signup-email").value.trim().toLowerCase();
  if (!email) {
    showError("email-error", "Email is required");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError("email-error", "Invalid email format");
    isValid = false;
  } else if (users.some(user => user.email === email)) {
    showError("email-error", "Email already registered");
    isValid = false;
  }

  // Password validation
  const password = document.getElementById("signup-password").value;
  if (!password) {
    showError("password-error", "Password is required");
    isValid = false;
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
    showError("password-error", "8+ chars with letter and number");
    isValid = false;
  }

  // Confirm password
  const confirmPassword = document.getElementById("signup-confirm-password").value;
  if (password !== confirmPassword) {
    showError("confirm-password-error", "Passwords don't match");
    isValid = false;
  }

  // Date of birth
  const dob = document.getElementById("signup-dob").value;
  if (!dob) {
    showError("dob-error", "Date of birth is required");
    isValid = false;
  }

  // Gender
  const gender = document.getElementById("signup-gender").value;
  if (!gender) {
    showError("gender-error", "Please select gender");
    isValid = false;
  }

  return isValid;
}

function showError(elementId, message) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = message;
    element.style.display = "block";
  }
}

function clearErrors() {
  document.querySelectorAll(".error-message").forEach(el => {
    el.textContent = "";
    el.style.display = "none";
  });
}