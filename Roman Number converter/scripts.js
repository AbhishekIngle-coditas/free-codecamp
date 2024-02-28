const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  const number = parseInt(numberInput.value.trim());

  if (isNaN(number)) {
    outputDiv.textContent = "Please enter a valid number";
    return;
  }

  if (number < 1) {
    outputDiv.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  if (number >= 4000) {
    outputDiv.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  outputDiv.textContent = convertToRoman(number);
});

function convertToRoman(num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

