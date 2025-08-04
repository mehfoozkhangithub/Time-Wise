const FAQData = [

    {
        question: "What is TimeWise?",
        answer: "TimeWise is a web-based platform that helps users manage their work hours efficiently and allows admins to track employee data in real time.."
    },

    {
        question: "How can I contact customer support?",
        answer: "Navigate to the Sign Up page, fill in your details, and create a secure password."
    },

    {
        question: "How does the `Thought of the Day` feature work?",
        answer: "After logging in, users can submit a personal thought that will be displayed on the Thoughts of the Day page. Others can like and save their favorites.."
    },

    {
        question: "How do I track my work hours?",
        answer: "Upon login, TimeWise automatically records your check-in time. You can view your total work hours on the Home Page and access your attendance history."
    },

    {
        question: "What is the Freeze/Break mode?",
        answer: "The Freeze mode allows you to pause your work session during breaks without resetting your work hours.."
    },
    
    {
        question: "How can I switch between light and dark modes?",
        answer: "Visit the Settings Page to toggle between light and dark themes for a more personalized experience."
    },
    
    {
        question: "How do I track my work hours?",
        answer: "Upon login, TimeWise automatically records your check-in time. You can view your total work hours on the Home Page and access your attendance history."
    },

     {
        question: "What should I do if I forget my password?",
        answer: "Click on the Forgot Password link on the login page and follow the instructions to reset your password.."
    },

     {
        question: "How do I contact TimeWise support?",
        answer: "Visit the Contact Us page and fill out the form with your query. Our support team will get back to you as soon as possible."
    }

];

const faqlist = document.getElementById("faq-container")

const FAQhtml = FAQData.map((faq) => {
    return `
    <div class="faq">
        <div class="question">${faq.question}
        <span class="plus">+</span>
        </div>
        <div class="answer">${faq.answer}</div>
    </div>
    `
}).join("");

faqlist.innerHTML = FAQhtml


// toggle functionallity of the FAQ question on plus and minus

document.querySelectorAll(".question").forEach(q => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        const plus = q.querySelector(".plus");
        answer.classList.toggle("active");

        const isOpen = answer.classList.contains("active");
        console.log(isOpen)

        plus.textContent = isOpen ? "-" : "+";
    })
})


// Dropdown code with its contact page 

const Answer = [
    "You can return any product within 30 days of purchase.",
    "Yes, 24/7 customer support is available via email and chat."
]


const showAnswer = (index) => {
    document.getElementById("faqAnswer").textContent = Answer[index] || "";
}