let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  method: launchOutput,
};

function launchOutput(num) {
  if (num % 2 === 0 && !(num % 3 === 0) && !(num % 5 === 0)) {
    return "Launch!";
  } else if (num % 3 === 0 && !(num % 2 === 0) && !(num % 5 === 0)) {
    return "Code!";
  } else if (num % 5 === 0 && !(num % 2 === 0) && !(num % 3 === 0)) {
    return "Rocks!";
  }

  return "PLACEHOLDER";
}

module.exports = launchcode;
