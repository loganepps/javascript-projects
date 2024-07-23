const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodCab = food.split(",").sort();
let equipmentCab = equipment.split(",").sort();
let petsCab = pets.split(",").sort();
let sleepAidsCab = sleepAids.split(",").sort();

console.log(foodCab, equipmentCab, petsCab, sleepAidsCab);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = []

cargoHold.push(foodCab, equipmentCab, petsCab, sleepAidsCab);

console.log(cargoHold);


//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let cabinet = input.question("Select a cabinet in the cargo hold.");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
