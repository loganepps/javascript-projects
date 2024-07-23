// Code your orbitCircumference function here:
function orbitCircumference(altitude) {
  const RADIUS_OF_EARTH = 6371; //km
  let orbitRadius = RADIUS_OF_EARTH + altitude;
  return Math.round(2 * Math.PI * orbitRadius);
}

// Code your missionDuration function here:
function missionDuration(numOrbits, alt = 2000, speed = 28000) {
  let circumference = orbitCircumference(alt);
  let distance = numOrbits * circumference;
  let time = Math.round((100 * distance) / speed) / 100;
  console.log(
    `The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`
  );
  return time;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let randomIndex = Math.floor(arr.length * Math.random());
  return arr[randomIndex];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, alt = 2000, speed = 28000) {
  let duration = missionDuration(3, alt, speed);
  let oxygen = Math.round(1000 * candidate.o2Used(duration)) / 1000;
  return `${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygen} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
  name: "Gordon Shumway",
  species: "alf",
  mass: 90,
  o2Used: function (hrs) {
    return 0.035 * hrs;
  },
  astronautID: 414,
};
let candidateB = {
  name: "Lassie",
  species: "dog",
  mass: 19.1,
  o2Used: function (hrs) {
    return 0.03 * hrs;
  },
  astronautID: 503,
};
let candidateC = {
  name: "Jonsey",
  species: "cat",
  mass: 3.6,
  o2Used: function (hrs) {
    return 0.022 * hrs;
  },
  astronautID: 796,
};
let candidateD = {
  name: "Paddington",
  species: "bear",
  mass: 31.8,
  o2Used: function (hrs) {
    return 0.047 * hrs;
  },
  astronautID: 291,
};
let candidateE = {
  name: "Pete",
  species: "tortoise",
  mass: 417,
  o2Used: function (hrs) {
    return 0.01 * hrs;
  },
  astronautID: 599,
};
let candidateF = {
  name: "Hugs",
  species: "ball python",
  mass: 2.3,
  o2Used: function (hrs) {
    return 0.018 * hrs;
  },
  astronautID: 890,
};

let crew = [candidateA, candidateC, candidateE];

// TEST //

// console.log(orbitCircumference(2000));

// console.log(missionDuration(6, 4000, 29000));

// console.log(selectRandomEntry(crew));

let selectedCandidate = selectRandomEntry(crew);

// console.log(oxygenExpended(selectedCandidate, 3100, 31000));

// BONUS MISSION //

function selectByOxygenUse(arr) {
  let candidate = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].o2Used(1) < candidate.o2Used(1)) {
      candidate = arr[i];
    }
  }
  return candidate;
}

let selectedCandidateBonus = selectByOxygenUse(crew);

console.log(oxygenExpended(selectedCandidateBonus));
