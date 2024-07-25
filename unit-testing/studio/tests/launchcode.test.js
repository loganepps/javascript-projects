// launchcode.test.js code:
const launchcode = require("../index.js");

describe("The launchcode object", function () {
  test("should pass the values of organization as 'nonprofit'", function () {
    expect(launchcode.organization).toBe("nonprofit");
  });
});

test("should pass the value of executiveDirector as 'Jeff'", function () {
  expect(launchcode.executiveDirector).toBe("Jeff");
});

test("should pass the value of percentageCoolEmployees as '100'", function () {
  expect(launchcode.percentageCoolEmployees).toBe(100);
});

test("should contain the value 'Web Development', 'Data Analysis', and 'Liftoff' in the key 'programsOffered'", function () {
  let programsArray = launchcode.programsOffered;

  expect(programsArray[0]).toBe("Web Development");
  expect(programsArray[1]).toBe("Data Analysis");
  expect(programsArray[2]).toBe("Liftoff");
  expect(programsArray.length).toBe(3);
});

describe("should have a method called launchOutput, which", function () {
  test("should return 'Launch!' for numbers evenly divisible by 2", function () {
    expect(launchcode.method(2)).toBe("Launch!");
  });
  test("should return 'Code!' for numbers evenly divisible by 3", function () {
    expect(launchcode.method(3)).toBe("Code!");
  });
  test("should return 'Rocks!' for numbers evenly divisible by 5", function () {
    expect(launchcode.method(5)).toBe("Rocks!");
  });
  test("should return 'LaunchCode!' for numbers evenly divisible by both 2 and 3", function () {
    expect(launchcode.method(6)).toBe("LaunchCode!");
  });
  test("should return 'Code Rocks!' for numbers evenly divisible by both 3 and 5", function () {
    expect(launchcode.method(15)).toBe("Code Rocks!");
  });
  test("should return 'Launch Rocks! (CRASH!!!!)' for numbers evenly divisible by both 2 and 5", function () {
    expect(launchcode.method(10)).toBe("Launch Rocks! (CRASH!!!!)");
  });
  test("should return 'LaunchCode Rocks!' for numbers evenly divisible by 2, 3 and 5", function () {
    expect(launchcode.method(30)).toBe("LaunchCode Rocks!");
  });
  test("should return 'Rutabagas! That doesn't work.' for numbers NOT evenly divisible by 2, 3 or 5", function () {
    expect(launchcode.method(7)).toBe("Rutabagas! That doesn't work.");
  });
});
