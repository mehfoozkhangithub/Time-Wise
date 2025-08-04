const FAQData = [

    {
        question: "What is TimeWise?",
        answer: "TimeWise is a web-based platform designed to help individuals and organizations effectively manage work hours and boost productivity. It offers real-time tracking of employee check-ins, work duration monitoring, and a unique `Thought of the Day` feature that allows users to share their ideas and reflections."
    },

    {
        question: "How do I sign up for TimeWise?",
        answer: "To create an account on TimeWise, visit the Sign Up page and enter your personal details, including your name, email, and password. You’ll also need to provide additional information such as your date of birth and gender. Once registered, you can log in and begin tracking your work hours right away."
    },

    {
        question: "How does the `Thought of the Day` feature work?",
        answer: "The `Thought of the Day` feature allows users to express their creativity and emotions by submitting personal reflections. These thoughts are displayed on a dedicated page where others can like and save them as favorites. The most popular thought of the day is showcased on the Home Page, adding a personal and motivational touch to the platform."
    },

    {
        question: "How do I track my work hours?",
        answer: "Once logged in, TimeWise automatically records your check-in time and tracks your work duration. Your total hours worked, attendance history, and performance statistics can be accessed from the Home Page. The platform ensures accurate and real-time monitoring without the risk of data manipulation."
    },

    {
        question: "What is the Freeze/Break mode, and how does it work?",
        answer: "The Freeze/Break mode allows users to temporarily pause their work session without logging out. This feature is especially useful during short breaks or lunch hours, as it prevents the system from resetting the work timer. When the user returns, the work session resumes, ensuring accurate time tracking."
    },
    
    {
        question: "Who can access the Admin Dashboard?",
        answer: "The Admin Dashboard is exclusively accessible to authorized personnel with a unique admin ID and password. It provides administrators with comprehensive data on employee attendance, check-in times, work duration, and performance statistics, enabling better workforce management and productivity analysis."
    },
    
    {
        question: "What data can admins view on the dashboard?",
        answer: "The Admin Dashboard offers real-time insights into employee activity, including the number of active employees, late check-ins, and average work hours. It also displays system activity statistics and allows admins to manage user data efficiently, making it an essential tool for effective team management."
    },

    {
        question: "How can I switch between light and dark modes?",
        answer: "TimeWise allows users to customize their viewing experience by switching between light and dark themes. By navigating to the Settings Page, users can choose their preferred mode, enhancing visual comfort and reducing eye strain during extended work sessions"
    },

     {
        question: "What should I do if I forget my password?",
        answer: "In case you forget your password, simply click on the Forgot Password link on the Login Page. Follow the instructions provided to verify your identity and reset your password. An email with further steps will be sent to your registered email address to ensure a secure recovery process."
    },

     {
        question: "How do I contact TimeWise support?",
        answer: "If you encounter any issues or have inquiries about the platform, visit the Contact Us page. Fill out the provided form with your name, email address, subject, and message. Our support team will respond promptly to assist you with your concerns and provide the necessary guidance."
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