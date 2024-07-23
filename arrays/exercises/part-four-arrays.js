let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
holdCabinet1.concat(holdCabinet2);
console.log(holdCabinet1);
//Here's what you would want to do.
let holdCabinet3 = holdCabinet1.concat(holdCabinet2);
console.log(holdCabinet3);

// Original arrays unaltered.

//2) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log(holdCabinet1.slice(0, 2));
console.log(holdCabinet1);

console.log(holdCabinet2.slice(1, 3));
console.log(holdCabinet2);

// Original arrays unaltered.

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
console.log(holdCabinet1.reverse());
console.log(holdCabinet1);

console.log(holdCabinet2.sort());
console.log(holdCabinet2);

//The difference between these two methods is that one reverses the order of the elements and the other sorts them in an increasing order according to their alphabetic and numeric values.
//In both of these cases, the original arrays were indeed altered.