document.addEventListener("DOMContentLoaded", () => {
  const breakButton = document.getElementById("break-button");
  const breakPopup = document.getElementById("break-popup");
  // const updateTime = document.getElementById("current-time");
  const closePopup = document.getElementById("close-popup");

  // This is the Date showing function
  const today = moment().format("dddd, MMMM D, YYYY");
  document.getElementById("current-date").textContent = today;

  // This is the function showing current time
  function updateTime() {
    const now = moment();
    document.getElementById("current_time").textContent =
      now.format("HH:mm:ss");
  }
  setInterval(updateTime, 1000);

  // Show popup
  breakButton.addEventListener("click", () => {
    breakPopup.classList.add("active");
  });

  // Close popup
  closePopup.addEventListener("click", () => {
    breakPopup.classList.remove("active");
  });
});

