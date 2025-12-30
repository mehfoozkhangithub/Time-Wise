let thoughtStorage = JSON.parse(localStorage.getItem("thought-data")) || [];

let AddThoughtBtn = document.querySelector(".addThought-btn");
let ThoughtInputArea = document.querySelector(".thoughts-input-area");
let ThoughtInput = document.querySelector(".thought-input");
let CancelBtn = document.querySelector(".cancel-btn");

AddThoughtBtn.addEventListener("click", () => {
  ThoughtInputArea.classList.toggle("toggle-thought-input-area");
  ThoughtInput.classList.toggle("toggle-thought-input");
  ThoughtInput.focus();
});

CancelBtn.addEventListener("click", () => {
  ThoughtInputArea.classList.remove("toggle-thought-input-area");
  ThoughtInput.classList.remove("toggle-thought-input");
  ThoughtInput.value = "";
});

// add admin thought
const addAdminThought = () => {
  let thoughtObj = {
    id: Date.now(),
    text: ThoughtInput.value.trim(),
  };
  if (thoughtObj.text !== "") {
    thoughtStorage.push(thoughtObj);
    localStorage.setItem("thought-data", JSON.stringify(thoughtStorage));
    ThoughtInput.value = "";

    appendAdminThought(thoughtStorage);
  } else {
    alert("⚠️ Please enter a thought before adding.");
  }
};


// Append Admin Thought
const appendAdminThought = (item) => {
  let adminThoughtCard = document.querySelector(".admin-thought-card");
  adminThoughtCard.innerHTML = "";
  console.log(thoughtStorage);

  item.slice(-6).reverse().forEach((el) => {
    const card = document.createElement("div");
    card.classList.add("single-thought");
    card.innerHTML = `
      <div class="user-avatar">SM</div>
            <div class="thought-content">
                <div class="thought-header">
                    <div class="user-details">
                        <span class="user-name">Sarah Mitchell</span>
                        <span class="post-time">${new Date(el.id).toLocaleString()}</span>
                    </div>
                    <div class="user-status">
                        <span class="status-text">productive</span>
                        <span class="favorite-icon">⭐</span>
                    </div>
                </div>

                <!-- thought text -->
                <div class="thought-text">
                    <p>
                        ${el.text}
                    </p>
                </div>

                <!-- thought reactions -->
                <div class="thought-reactions">
                    <div class="reaction-item">
                        <i class="bi bi-star"></i>
                        <span class="reaction-count">3</span>
                    </div>
                    <div class="reaction-item">
                        <i class="bi bi-heart"></i>
                        <span class="reaction-count">2</span>
                    </div>
                    <div class="reaction-item">
                        <i class="bi bi-hand-thumbs-up"></i>
                        <span class="reaction-count">5</span>
                    </div>
                    <div class="reaction-item comments">
                        <i class="bi bi-chat"></i>
                        <span class="reaction-count">2 comments</span>
                    </div>
                </div>
            </div>
            `
            adminThoughtCard.appendChild(card);
  });

}

window.onload = () => {
  appendAdminThought(thoughtStorage);
}