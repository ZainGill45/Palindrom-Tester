const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const CheckIfPalindrome = () => {
  // Get input string
  console.log("here")
  let input = palindromeInput.value;

  if (input === '' || isNumeric(input)) {
    palindromeInput.value = null;
    outputMessage.innerHTML = `This Is Not A Valid Input`;
    container.style.backgroundColor = invalidInputBackgroundColor;
    return false
  }

  const originalInput = input;
  palindromeInput.value = null;

  // We want to split up the input into it's characters so they can be indexed also need to format the text string
  input = input.replaceAll(' ', '').replaceAll(',', '').replaceAll('.', '').toLowerCase().split("");

  // Then we want to test if the first and last words are the same
  while (input[0] === input[input.length - 1]) {
    input.shift();
    input.pop();
    if (input.length === 0 || input.length === 1) {
      outputMessage.innerHTML = `${originalInput} is a Palindrome`;
      container.style.backgroundColor = isPalindromeBackground;
      break;
    }
  }
 
  if (input.length > 2) {
    outputMessage.innerHTML = `${originalInput} is not a Palindrome`;
    container.style.backgroundColor = notPalindromeBackground;
    isPalindrome = false;
  }
}

const isNumeric = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let x = 0; x < numbers.length; x++) {
      if (parseFloat(str[i]) === numbers[x]) {
        return true;
      }
    }
  }
  return false;
}

const SetRandomBackgroundColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
}

const notPalindromeBackground = "#d95550";
const isPalindromeBackground = "#51cf66";
const invalidInputBackgroundColor = "#495057";
const container = document.querySelector("body");
const palindromeSubmitBtn = document.querySelector("#palindrome-button").addEventListener('click', CheckIfPalindrome);
const palindromeInput = document.querySelector("#palindrome-input");
const outputMessage = document.querySelector("#output-message");