const quote = document.getElementById("quote"),
  author = document.getElementById("author"),
  quoteBtn = document.getElementById("new-quote-btn"),
  speakBtn = document.getElementById("speak-btn"),
  copyBtn = document.getElementById("copy-btn"),
  twitterBtn = document.getElementById("twitter-btn");

let data;
fetch("https://api.quotable.io/random")
  .then((res) => res.json())
  .then((result) => (data = result));

console.log(data);
//   Random Quote Function
function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "loading...";
  //   Fetching random quotes/data from the API and parsing it into json/ Javascript Object
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quote.innerText = result.content;
      author.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    });
}

quoteBtn.addEventListener("click", randomQuote);

speakBtn.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(
    `${quote.innerText} by ${author.innerText}`
  );
  speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
  copyBtn.classList.add("active");
  navigator.clipboard.writeText(quote.innerText);
  setTimeout(() => {
    copyBtn.classList.remove("active");
  }, 1000);
});

twitterBtn.addEventListener("click", () => {
  let twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerText}`;
  window.open(twitterUrl, "_blank");
});
