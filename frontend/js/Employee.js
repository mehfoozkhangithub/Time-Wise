 // Quotes data - at least 5 for each category
    const quotes = [
      {
        text: "Teamwork is the ability to work together toward a common vision.",
        author: "Andrew Carnegie",
        topic: "Teamwork"
      },
      {
        text: "Alone we can do so little; together we can do so much.",
        author: "Helen Keller",
        topic: "Teamwork"
      },
      {
        text: "Talent wins games, but teamwork and intelligence win championships.",
        author: "Michael Jordan",
        topic: "Teamwork"
      },
      {
        text: "Coming together is a beginning. Keeping together is progress. Working together is success.",
        author: "Henry Ford",
        topic: "Teamwork"
      },
      {
        text: "None of us is as smart as all of us.",
        author: "Ken Blanchard",
        topic: "Teamwork"
      },
      {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        topic: "Hard Work"
      },
      {
        text: "Hard work beats talent when talent doesn't work hard.",
        author: "Tim Notke",
        topic: "Hard Work"
      },
      {
        text: "There is no substitute for hard work.",
        author: "Thomas Edison",
        topic: "Hard Work"
      },
      {
        text: "The harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson",
        topic: "Hard Work"
      },
      {
        text: "Success is the sum of small efforts, repeated day in and day out.",
        author: "Robert Collier",
        topic: "Hard Work"
      },
      {
        text: "Discipline is the bridge between goals and accomplishment.",
        author: "Jim Rohn",
        topic: "Discipline"
      },
      {
        text: "With self-discipline, almost anything is possible.",
        author: "Theodore Roosevelt",
        topic: "Discipline"
      },
      {
        text: "Discipline is choosing between what you want now and what you want most.",
        author: "Abraham Lincoln",
        topic: "Discipline"
      },
      {
        text: "The first and greatest victory is to conquer yourself.",
        author: "Plato",
        topic: "Discipline"
      },
      {
        text: "Small daily improvements are the key to staggering long-term results.",
        author: "Unknown",
        topic: "Discipline"
      },
      {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        topic: "Motivational"
      },
      {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs",
        topic: "Motivational"
      },
      {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
        topic: "Motivational"
      },
      {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair",
        topic: "Motivational"
      },
      {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
        topic: "Motivational"
      },
      {
        text: "The best way to appreciate your job is to imagine yourself without one.",
        author: "Oscar Wilde",
        topic: "Work"
      },
      {
        text: "Choose a job you love, and you will never have to work a day in your life.",
        author: "Confucius",
        topic: "Work"
      },
      {
        text: "Work hard, be kind, and amazing things will happen.",
        author: "Conan O'Brien",
        topic: "Work"
      },
      {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
        author: "Work"
      },
      {
        text: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon",
        topic: "Work"
      }
    ];

    // DOM elements
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    const quoteTopic = document.getElementById('quoteTopic');
    const prevBtn = document.getElementById('prevQuote');
    const nextBtn = document.getElementById('nextQuote');
    const randomBtn = document.getElementById('randomQuote');

    // Current quote index
    let currentQuoteIndex = 0;

    // Function to display a quote
    function displayQuote(index) {
      const quote = quotes[index];
      quoteText.textContent = quote.text;
      quoteAuthor.textContent = `- ${quote.author}`;
      quoteTopic.textContent = quote.topic;
    }

    // Event listeners for buttons
    prevBtn.addEventListener('click', () => {
      currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
      displayQuote(currentQuoteIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
      displayQuote(currentQuoteIndex);
    });

    randomBtn.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      currentQuoteIndex = randomIndex;
      displayQuote(currentQuoteIndex);
    });

    // Initialize with the first quote
    displayQuote(currentQuoteIndex);

    // Auto-rotate quotes every 15 seconds
    setInterval(() => {
      currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
      displayQuote(currentQuoteIndex);
    }, 15000);
