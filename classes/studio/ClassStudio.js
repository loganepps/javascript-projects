//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }

  addScore(newScore) {
    this.scores.push(newScore);
  }

  average() {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    let avg = sum / this.scores.length;
    return Math.round(avg * 10) / 10;
  }

  status() {
    let status = "Unknown";
    let averageTestScore = this.average();
    if (averageTestScore >= 90) {
      status = "Accepted";
    } else if (averageTestScore >= 80) {
      status = "Reserve";
    } else if (averageTestScore >= 70) {
      status = "Probationary";
    } else {
      status = "Rejected";
    }
    return status;
  }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGladiator = new CrewCandidate("Glad Gladiator", 225, [75, 78, 62]);

// console.log(bubbaBear);
// console.log(merryMaltese);
// console.log(gladGladiator);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

bubbaBear.addScore(83);
console.log(bubbaBear);

// console.log(bubbaBear.average());
console.log(merryMaltese.average());
// console.log(gladGladiator.average());

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let testCounter = 0;
while (gladGladiator.average() < 80) {
  gladGladiator.addScore(100);
  testCounter++;
}
while (gladGladiator.average() < 90) {
  gladGladiator.addScore(100);
  testCounter++;
}

console.log(`It took ${testCounter} tests to reach Reserve.`);

console.log(`It took ${testCounter} tests to reach Accepted.`);

console.log(
  `${
    bubbaBear.name
  } earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}`
);
console.log(
  `${
    merryMaltese.name
  } earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}`
);
console.log(
  `${
    gladGladiator.name
  } earned an average test score of ${gladGladiator.average()}% and has a status of ${gladGladiator.status()}`
);

