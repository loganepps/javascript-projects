const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(0, 3);
let newStr2 = str.slice(3, 10);
let finalString = newStr2 + newStr;

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`We are student${str} or, the pseudo-pig Latin version, ${finalString}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let letters = input.question("How many letters will be relocated?");
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (letters > 10) {
    console.log(`Result: ${finalString}. Word has only 10 characters. Try again.`);
} else {
    Number(letters);
    let letters2 = str.slice(0, letters);
    let letters3 = str.slice(letters, 10);
    let finalLetters = letters3 + letters2;
    console.log(finalLetters);
}
