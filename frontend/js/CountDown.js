const star = 1;

let time;

// ✅ Define savedTime first
const savedTime = localStorage.getItem("remainingTime");

if (savedTime !== null && !isNaN(savedTime)) {
  time = parseInt(savedTime, 10); // restore saved time
} else {
  time = star * 60; // default to 1 minute
}

const countDown = document.querySelector("#countdown");

const updateCount = () => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  countDown.innerHTML = `${minutes}:${seconds}`;

  if (time > 0) {
    time--;
    localStorage.setItem("remainingTime", time); // ✅ Save time every second
  } else {
    clearInterval(timer);
    localStorage.removeItem("remainingTime"); // 🧹 Clear when done
    alert("Time's up!");
  }
};

const timer = setInterval(updateCount, 1000);

updateCount();

function openModal() {
  const modal = document.querySelector("#modal");
  modal.classList.add("show");
}

function closeModal() {
  const modal = document.querySelector("#modal");
  modal.classList.remove("show");
}
