// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
// Code your divide function here:
let divide = function (numerator, denominator) {
  if (denominator === 0) {
    throw Error("Attempted to divide by zero.");
  } else {
    return numerator / denominator;
  }
};

// Your function should return the result of numerator / denominator.
console.log(divide(8, 2));

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."
console.log(divide(6, 0));
