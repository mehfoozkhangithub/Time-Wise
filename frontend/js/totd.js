// dark mode

// let lightModeBtn = document.querySelector(".light-mode");
// let darkModeBtn = document.querySelector(".dark-mode");

// darkModeBtn.addEventListener("click", ()=>{
//     document.main.style.backgroundColor = "black"
// })

async function getThoughts() {
    let api = "https://api-server-zecj.onrender.com/Thought";
    try {
        let res = await fetch(api);
        let data = await res.json();
        appendCards(data);
    } catch (error) {
        console.log(error);
    }
}
getThoughts();


function appendCards(data) {
    let container = document.querySelector(".thought-cards");
    container.innerHTML = "";

    data.forEach((el) => {
        let div = document.createElement("div");
        div.className = "card-1";
        div.innerHTML = `
            <div class="user-info">
                <img src="./css/utils/img/profile_avtar.avif" alt="user-profile img">
                <div>
                    <p>${el.username || "User Name"}</p>
                    <p>${moment(el.createdAt).fromNow()}</p>
                </div>
            </div>
            <p>${el.thought}</p>
            <div class="btns-container">
                <div class="like-btn">
                    <button><i class="bi bi-heart"></i></button>
                    <p class ="like-count">0</p>
                </div>
                <button class="star"><i class="bi bi-star"></i></button>
            </div>
        `;

        // Toggle like button

        let likeBtn = div.querySelector(".like-btn button");
        let likeCount = div.querySelector(".like-count");
        let heartIcon = likeBtn.querySelector("i");
        let isLiked = false;

        likeBtn.addEventListener("click", () => {
            if (!isLiked) {
                isLiked = true;
                likeCount.innerHTML = 1;
                heartIcon.classList.remove("bi-heart");
                heartIcon.classList.add("bi-heart-fill");
                heartIcon.style.color = "red";
                heartIcon.style.transition = "0.4s";
            }
            else {
                isLiked = false;
                likeCount.innerHTML = 0;
                heartIcon.classList.remove("bi-heart-fill");
                heartIcon.classList.add("bi-heart");
                heartIcon.style.color = "black";
            }
        });

        // Toggle star(favourite) icon

        let starBtn = div.querySelector(".star");
        let starIcon = starBtn.querySelector("i");
        let isStarred = false;

        starBtn.addEventListener("click", () => {
            if (!isStarred) {
                isStarred = true;
                starIcon.classList.remove("bi-star");
                starIcon.classList.add("bi-star-fill");
                starIcon.style.color = "gold";
            } else {
                isStarred = false;
                starIcon.classList.remove("bi-star-fill");
                starIcon.classList.add("bi-star");
                starIcon.style.color = "black";
            }
        });

        container.append(div);
    });
}


