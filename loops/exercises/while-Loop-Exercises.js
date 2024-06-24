//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');
let fuelLvl = 0;
let numAstronauts = 0;
let altitude = 0;

/*Exercise #4: Construct while loops to do the following:
//a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  while (fuelLvl <= 5000 || fuelLvl > 30000 || isNaN(fuelLvl)) {
    fuelLvl = input.question("Enter the starting fuel level: ");
  }
  
//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  while (numAstronauts < 1 || numAstronauts > 7 || isNaN(numAstronauts)) {
    numAstronauts = input.question("Enter the number of astronauts: ");
  }

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
  while (fuelLvl - 100 * numAstronauts >= 0) {
    altitude += 50;
    fuelLvl -= 100 * numAstronauts;
  }

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${altitude}km.`);
if (altitude >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}
