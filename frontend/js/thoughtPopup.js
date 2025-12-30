
const thought = async (event) => {
    let api = `https://api-server-zecj.onrender.com/Thought`;

    let textArea = document.getElementById("textarea").value;

    let obj = {
        id : Date.now(),
        createdAt : new Date(),
        thought : textArea
    }

    try {
        let res = await fetch(api, {
            method : "POST",
            body : JSON.stringify(obj),
            headers : {"Content-type" : "application/json"}
        });
        let data = await res.json();
    } 
    catch (error) {
        console.log(error)
    }

}


// Success message popup 

let thoughtPopup = document.querySelector(".thought-popup-container");
let postBtn = document.querySelector(".post-thought-btn");
let sucMsg = document.querySelector(".success-msg-popup");

postBtn.addEventListener("click", ()=>{
    sucMsg.style.display = "flex";
    sucMsg.classList.add("sucMsg-popup");
    thoughtPopup.style.display = "none";
})