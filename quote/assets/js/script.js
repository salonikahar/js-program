const quotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
    { text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
    { text: "Always remember that you are absolutely unique. Just like everyone else.", author: "Margaret Mead" },
    { text: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" },
    { text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "Whoever is happy will make others happy too.", author: "Anne Frank" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
    { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" }
  ];
  
  let quote = document.getElementById("quote");
  let quote_text = document.getElementById("quote_text");
  let quote_author = document.getElementById("quote_author");
  let generate = document.getElementById("generate");
  let autogenerate = document.getElementById("autogenerate");
  
function displayQuote() {
  try {
    let random = Math.floor(Math.random() * quotes.length);

    if (!quotes || !quotes[random]) {
      throw new Error("Quotes data is not available or invalid.");
    }

    quote_text.textContent = `"${quotes[random].text}"`;
    quote_author.textContent = `— ${quotes[random].author}`;
  } catch (error) {
    console.error("An error occurred:", error.message);
    quote_text.textContent = "Oops! Something went wrong.";
    quote_author.textContent = "";
  }
}


generate.addEventListener("click", displayQuote);

autogenerate.addEventListener("click", () => {
  if (autogenerate.textContent === "Stop auto-generate") {
    clearInterval(autoGenerateInterval); 
    autogenerate.textContent = "Start auto-generate"; 
  } else {
    autoGenerateInterval = setInterval(displayQuote, 5000);
    autogenerate.textContent = "Stop auto-generate";  
  }
});
