document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('adminUsername').value.trim();

  const password = document.getElementById('adminPassword').value.trim();

  const errorMessage = document.getElementById('errorMessage');

  // Temporary hardcoded admin login (replace with DB logic later)

  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'timewise123';

  if(username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    window.location.href = 'AdminDashboard.html';
  } else {
    errorMessage.textContent = 'Invalid credentials. Please try again.'
  }
});