const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let testIfWordIsPalindrom = () => {
  // Get input string
  let input = palindromInput.value;

  if (input === '' || isNumeric(input)) {
    palindromInput.value = null;
    outputMessage.innerHTML = `This Is Not A Valid Input`;
    console.log('here');
    return false
  }

  let originalInput = input;
  palindromInput.value = null;

  // We want to split up the input into it's characters so they can be indexed also need to format the text string
  input = input.replaceAll(' ', '').replaceAll(',', '').replaceAll('.', '').toLowerCase().split("");

  // Then we want to test if the first and last words are the same
  while (input[0] === input[input.length - 1]) {
    input.shift();
    input.pop();
    if (input.length === 0 || input.length === 1) {
      outputMessage.innerHTML = `${originalInput} Is A Palindrom`; // console.log("This is a palindrom");
      container.style.backgroundColor = isPalindromBackgroundColor;
      break;
    }
  }

  if (input.length > 2) {
    outputMessage.innerHTML = `${originalInput} Is Not A Palindrom`; // console.log("Not a palindroms");
    container.style.backgroundColor = notPalindromBackgroundColor;
    isPaldindrom = false;
  }
}

const isNumeric = (str) => {
  for (var i = 0; i < str.length; i++) {
    for (var x = 0; x < numbers.length; x++) {
      if (parseFloat(str[i]) === numbers[x]) {
        return true;
      }
    }
  }
  return false;
}

const SetRandomBackgroundColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
}

const notPalindromBackgroundColor = "#ee5253";
const isPalindromBackgroundColor = "#10ac84";
const container = document.querySelector("body");
const palindromSubmitBtn = document.querySelector("#palindrom-button").addEventListener('click', testIfWordIsPalindrom);
const palindromInput = document.querySelector("#palindrom-input");
const outputMessage = document.querySelector("#output-message");