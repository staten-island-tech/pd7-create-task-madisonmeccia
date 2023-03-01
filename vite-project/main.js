const wordcount = wordlist.length;
const randomindex = Math.floor(Math.random() * wordcount);
const answer = wordlist[randomindex];
const input = document.querySelector("#word");
const message = document.querySelector("#message");
document.querySelector("#enterbutton").addEventListener("click", function () {
  const word = input.value;
  message.innerHTML = "";
  if (word.length !== 5) {
    message.innerHTML = "word must be five letters";
    return;
  }
  let score = "";
  for (let i = 0; i < 5; i++) {
    if (word[i] === answer[i]) {
      score += "$";
    } else if (answer.indexOf(word[i]) > -1) {
      score += "x";
    } else {
      score += ".";
    }
  }
  message.innerHTML = score;
});
console.log(wordlist[randomindex]);
// separate place for message vs output
// keep track of how many guesses and make sure its less than six
//list out all attempts
//when they get correct one, end game
//restart button
