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

  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You won!";
    popup.style.display = "flex";
  }
}

// update the wrong letters array
function updateWrongLettersEl() {
  console.log("update wrong letters");
}

// show notification
function showNotification() {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

// keydown event
window.addEventListener("keydown", e => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

displayWord();
