const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const text = textInput.value.trim();

  if (!text) {
    alert("Please input a value");
    return;
  }

  const processedText = removeNonAlphanumeric(text).toLowerCase();
  const isPalindrome = isTextPalindrome(processedText);

  resultDiv.textContent = `${text} ${isPalindrome ? "is" : "is not"} a palindrome`;
});

function removeNonAlphanumeric(text) {
  return text.replace(/[^a-zA-Z\d]/g, "");
}

function isTextPalindrome(text) {
  const midIndex = Math.floor(text.length / 2);
  for (let i = 0; i < midIndex; i++) {
    if (text[i] !== text[text.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
