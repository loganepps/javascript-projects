// launchcode.test.js code:
const launchcode = require("../index.js");

describe("Testing launchcode", function () {
  it("should pass the values of organization as 'nonprofit'", function () {
    expect(launchcode.organization).toBe("nonprofit");
  });
});

it("should pass the value of executiveDirector as 'Jeff'", function () {
  expect(launchcode.executiveDirector).toBe("Jeff");
});

it("should pass the value of percentageCoolEmployees as '100'", function () {
  expect(launchcode.percentageCoolEmployees).toBe(100);
});

test("should contain the value 'Web Development', 'Data Analysis', and 'Liftoff' in the key 'programsOffered'", function () {
  let programsArray = launchcode.programsOffered;

  expect(programsArray[0]).toBe("Web Development");
  expect(programsArray[1]).toBe("Data Analysis");
  expect(programsArray[2]).toBe("Liftoff");
  expect(programsArray.length).toBe(3);
});

test("checks to see if launchOutput() returns 'Launch!' when passed a number ONLY divisible by 2", function () {
  expect(launchcode.method(2)).toBe("Launch!");
});

test("checks to see if launchOutput() returns 'Code!' when passed a number that is ONLY divisible by 3", function () {
  expect(launchcode.method(3)).toBe("Code!");
});

test("checks to see if launchOutput() returns 'Rocks!' when passed a number that is ONLY divisible by 3", function () {
  expect(launchcode.method(5)).toBe("Rocks!");
});
