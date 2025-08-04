const star = 10;
let timer = star * 60;
let intervalid;

const countDown = document.querySelector("#countdown");
const breakBtn = document.querySelector("#breakBtn");

// Do NOT auto-assign saved time here on page load

function openModal() {
  const saved = localStorage.getItem("remainingTime");

  if (saved !== null && !isNaN(saved)) {
    timer = parseInt(saved, 10); // Resume saved time
  } else {
    timer = star * 60; // Start fresh
  }

  const modal = document.querySelector("#modal");
  modal.classList.add("show");
  breakBtn.style.display = "none";

  if (!intervalid) {
    intervalid = setInterval(update, 1000);
    update();
  }
}

function update() {
  const minutes = Math.floor(timer / 60);
  let seconds = timer % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  countDown.innerHTML = `${minutes}:${seconds}`;

  if (timer > 0) {
    timer--;
    localStorage.setItem("remainingTime", timer);
  } else {
    clearInterval(intervalid);
    intervalid = null;
    localStorage.removeItem("remainingTime");
    closeModal();
  }
}

function closeModal() {
  const modal = document.querySelector("#modal");
  modal.classList.remove("show");
  breakBtn.style.display = "inline-block";
}

// Add event listener to button

breakBtn.addEventListener("click", openModal);
