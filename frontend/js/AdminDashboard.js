// Sidebar
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("sidebarToggle");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    document.body.classList.toggle("sidebar-open");
  });

// This is the Date showing function
  const today = moment().format('dddd, MMMM D, YYYY');
  document.getElementById('current-date').textContent = today;

// This is the function showing current time
function updateTime() {
  const now = moment();
  document.getElementById("current_time").textContent = now.format("HH:mm:ss"); 
}

// Light/Dark Theme Logic
const themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


updateTime(); 
setInterval(updateTime, 1000); 