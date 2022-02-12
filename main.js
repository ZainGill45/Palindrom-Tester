let testIfWordIsPalindrom = () => {
  // Get input string
  let word = palindromInput.value;

  if (word === '') {
    outputMessage.innerHTML = `This Is Not A Valid Input`;
    return false
  }

  let originalInput = word;
  palindromInput.value = null;

  // We want to split up the word into it's characters so they can be indexed also need to format the text string
  word = formatPalindromString(word);

  // Then we want to test if the first and last words are the same
  while (word[0] === word[word.length - 1]) {
    word.shift();
    word.pop();
    if (word.length === 0 || word.length === 1) {
      outputMessage.innerHTML = `${originalInput} Is A Palindrom`; // console.log("This is a palindrom");
      break;
    }
  }

  if (word.length > 2) {
    outputMessage.innerHTML = `${originalInput} Is Not A Palindrom`; // console.log("Not a palindroms");
    isPaldindrom = false;
  }
}


let formatPalindromString = (word) => {
  word = word.replaceAll(' ', '');
  word = word.replaceAll(',', '');
  word = word.replaceAll('.', '');
  word = word.toLowerCase();
  word = word.split("");
  return word;
}

const palindromSubmitBtn = document.querySelector("#palindrom-button").addEventListener('click', testIfWordIsPalindrom);
const palindromInput = document.querySelector("#palindrom-input");
const outputMessage = document.querySelector("#output-message");