const { whoWon } = require("../RPS.js");

describe("whoWon", function () {
  test("should return 'TIE!' if both players choose same move", function () {
    let output = whoWon("rock", "rock");
    expect(output).toBe("TIE!");
  });
  test("should return 'Player 2 wins!' if P1 = rock & P2 = paper", function () {
    let output = whoWon("rock", "paper");
    expect(output).toBe("Player 2 wins!");
  });
  test("should return 'Player 2 wins!' if P1 = paper & P2 = scissors", function () {
    let output = whoWon("paper", "scissors");
    expect(output).toBe("Player 2 wins!");
  });
  test("should return 'INVALID MOVE DETECTED!' if a player chooses something other than 'rock', 'paper' or 'scissors'", function () {
    let output = whoWon("glass", "rock");
    expect(output).toBe("INVALID MOVE DETECTED!");
  });
});
