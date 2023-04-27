let guesses = 0;
const wordcount = wordlist.length;
let randomindex = Math.floor(Math.random() * wordcount);
//floor removes remainder (always rounds down)
const input = document.querySelector("#word");
const message = document.querySelector("#message");
const output = document.querySelector("#guesses");

document.querySelector("#enterbutton").addEventListener(
  "click",
  //when user clicks button, function is run thru
  function () {
    let word = `${input.value}`;
    //turning inputs into strings and makes sure that array stays unchanged by inputs
    let answer = `${wordlist[randomindex]}`;

    message.innerHTML = "";
    if (word.length !== 5) {
      message.innerHTML = "word must be five letters";
      return;
    }
    guesses++;

    word = word.toUpperCase();
    let score = [".", ".", ".", ".", "."];
    for (let i = 0; i < 5; i++) {
      if (word[i] === answer[i]) {
        score[i] = "$";
        answer = setCharAt(answer, i, ".");
        word = setCharAt(word, i, ".");
      }
    }
    for (
      let i = 0;
      i < 5;
      i++ //(initial value, condition it will check, what code is always run through, keep ading i until i= or > 5) 0 is first letter of word
    ) {
      if (word[i] !== "." && answer.indexOf(word[i]) > -1) {
        //now we are trying to find a letter that is not an exact match, word[i]>-1 is to amke sure that letter is actually in word.
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
  }
);

document.getElementById("reset").onclick = function () {
  document.getElementById("userword").innerHTML = "";
  document.getElementById("message").innerHTML = "";
  output.innerHTML = "";
  score = [".", ".", ".", ".", "."];
  input.value = "";
  guesses = 0;
  randomindex = Math.floor(Math.random() * wordcount);
};
function setCharAt(str, index, chr) {
  return str.substring(0, index) + chr + str.substring(index + 1);
}
// foo("CATAPULT", 5, "x");
// return "CATAPULT".substring(0, 5) + "x" + "CATAPULT".substring (6);
// return "CATAP" + "x" + "LT";
// return "CATAPxLT";

//replacing character we dont want to keep and keeping characters that are correct/useful
function showNewMatches(score) {
  //showNewMatches- adds row of new guesses
  let row = document.createElement("div");
  row.classList.add("row");
  //adds row class to boxes("div")
  score.forEach((ea) => {
    let box = document.createElement("div");
    box.classList.add("box");
    if (ea === "$") {
      box.classList.add("perfect");
      //adds "perfect" class to box {parent-child} (more specific)
    } else if (ea === "x") {
      box.classList.add("wrongplace");
    }
    row.appendChild(box);
  });
  output.appendChild(row);
  //puts rows and boxes in "guesses" box
}
