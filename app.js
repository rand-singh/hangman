const wordEl = document.getElementById("word"),
  wrongLetterEl = document.getElementById("wrong-letters"),
  playAgainBtn = document.getElementById("play-again"),
  popup = document.getElementById("popup-container"),
  notification = document.getElementById("notification-container"),
  finalMessage = document.getElementById("final-message"),
  figureParts = document.querySelectorAll(".figure-part"),
  words = ["apple", "monster", "spiderman", "popcorn"],
  correctLetters = ["p", "l", "e"],
  wrongLetters = [];

let selectedWord = words[Math.floor(Math.random() * words.length)];

// show the hidden word
function displayWord() {
  wordEl.innerHTML = `
        ${selectedWord
          .split("")
          .map(
            letter => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ""}
                </span>
                `
          )
          .join("")}
    `;

  const innerWord = wordEl.innerText.replace(/\n/g, "");

  console.log(wordEl.innerText, innerWord);
  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You won!";
    popup.style.display = "flex";
  }
}

displayWord();
