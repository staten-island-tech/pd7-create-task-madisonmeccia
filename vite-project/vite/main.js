let guesses = 0;
const wordcount = wordlist.length;
let randomindex = Math.floor(Math.random() * wordcount);
const input = document.querySelector("#word");
const message = document.querySelector("#message");
const output = document.querySelector("#guesses");
document.querySelector("#enterbutton").addEventListener("click", function () {
  let word = `${input.value}`;
  let answer = `${wordlist[randomindex]}`;
  guesses++;

  message.innerHTML = "";
  if (word.length !== 5) {
    message.innerHTML = "word must be five letters";
    return;
  }

  word = word.toUpperCase();
  let score = [".", ".", ".", ".", "."];
  for (let i = 0; i < 5; i++) {
    if (word[i] === answer[i]) {
      score[i] = "$";
      answer = setCharAt(answer, i, ".");
      word = setCharAt(word, i, ".");
    }
  }
  for (let i = 0; i < 5; i++) {
    if (word[i] !== "." && answer.indexOf(word[i]) > -1) {
      score[i] = "x";
      answer = setCharAt(answer, answer.indexOf(word[i]), ".");
    }
  }
  showNewMatches(score);
  document.getElementById("userword").innerHTML = input.value;
  input.value = "";
  const win = score.every((ea) => ea === "$");
  if (win) {
    document.getElementById("message").innerHTML = "you win!";
  } else if (guesses === 6) {
    document.getElementById("message").innerHTML = "game over!";
  }
});
document.getElementById("reset").onclick = function () {
  document.getElementById("userword").innerHTML = "";
  document.getElementById("message").innerHTML = "";
  output.innerHTML = "";
  score = [".", ".", ".", ".", "."];
  input.value = "";
  guesses = 0;
};
console.log(wordlist[randomindex]);
function setCharAt(str, index, chr) {
  return str.substring(0, index) + chr + str.substring(index + 1);
}
function showNewMatches(score) {
  let row = document.createElement("div");
  row.classList.add("row");
  score.forEach((ea) => {
    let box = document.createElement("div");
    box.classList.add("box");
    if (ea === "$") {
      box.classList.add("perfect");
    } else if (ea === "x") {
      box.classList.add("wrongplace");
    }
    row.appendChild(box);
  });
  output.appendChild(row);
}
// separate place for message vs output
// keep track of how many guesses and make sure its less than six
//list out all attempts
//when they get correct one, end game
//restart button
//aabcd
//eastz
