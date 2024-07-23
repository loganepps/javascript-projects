const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let startsWithA = function (input) {
  if (input[0] === "a" || input[0] === "A") {
    return true;
  }

  return false;
}

// console.log(getValidInput('Enter a word or phrase that begins with the letter "a": ', startsWithA));

// TODO 2: write a validator 
// that ensures input is a vowel
let isVowel = function (l) {
  let vowels = ["a", "e", "i", "o", "u", "y"];
  if (vowels.includes(l.toLowerCase())) {
    return true;
  }

  return false;
}

// console.log(getValidInput('Please enter a vowel: ', isVowel));


// Be sure to test your code!
