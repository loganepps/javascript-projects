let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};


// After you have created the other object literals, add the astronautID property to each one.
let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];

let ids = randomUniqueNum(10, 5);

function randomUniqueNum(range, outputCount) {
   let arr = [];
   for (let i = 1; i <= range; i++) {
      arr.push(i)
   }
   
   let result = [];
   for (let i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
   }
   return result;
}


for (let i = 0; i < crew.length; i++) {
   let member = crew[i];
   member["astronautID"] = ids[i];
}
   
// console.log(ids);
// console.log(crew);

// Add a move method to each animal object
for (let i = 0; i < crew.length; i++) {
   let member = crew[i];
   member["move"] = function ()
      {return Math.round(Math.random() * 10);}
}
// console.log(crew)

// Create an array to hold the animal objects.
// See crew array above^^^

// Print out the relevant information about each animal.
function crewReports(member) {
   return `${member.name} is a ${member.species}. They are ${member.age} years old and ${member.mass} kilograms. Their ID is ${member.astronautID}.`;
}

// for (let i = 0; i < crew.length; i++) {
//    console.log(crewReports(crew[i]));
// }

// Start an animal race!
function fitnessTest(arr) {
   let results = [], steps, turns;
   for (let i = 0; i < arr.length; i++) {
      steps = 0;
      turns = 0;
      
      while(steps < 20) {
         steps += arr[i].move();
         turns++;
      }
      
      results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
}

console.log(fitnessTest(crew));