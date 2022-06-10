const check = document.getElementById("check");
const reset = document.getElementById("reset");
const inputVal = document.getElementById("text");
const output = document.getElementById("output");

output.style.display = "none";

reset.addEventListener("click", () => {
  window.location.reload();
});

const checkForPalindrome = () => {
  const enteredNumber = inputVal.value;

  const b = enteredNumber.split("");
  var score = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i] == b.reverse()[i]) {
      score += 1;
    }
  }
  if (score == b.length) {
    output.innerText = "The entered value is a palindrome";
    output.style.display = "block";
  } else output.innerText = "The entered value is not a palindrome";
  output.style.display = "block";
};

check.addEventListener("click", () => {
  if (inputVal.value < 10) {
    alert("Please enter a two digit nummber to check for palindrome!");
  } else {
    checkForPalindrome();
  }
});
