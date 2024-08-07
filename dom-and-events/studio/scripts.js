// Write your JavaScript code here.
window.addEventListener("load", function () {
  let altitude = 0;
  let rocketPosX = 0;
  let rocketPosY = 0;

  // BUTTONS
  const takeoffButton = document.getElementById("takeoff");
  const landButton = document.getElementById("landing");
  const abortButton = document.getElementById("missionAbort");

  // AREAS
  const flightStatus = document.getElementById("flightStatus");
  const shuttleBackground = document.getElementById("shuttleBackground");
  const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

  //ROCKET IMAGE
  const rocket = document.getElementById("rocket");

  takeoffButton.addEventListener("click", function () {
    let confirmTakeoff = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );
    if (confirmTakeoff) {
      flightStatus.innerHTML = "Shuttle in flight.";
      flightStatus.style.color = "midnightblue";
      shuttleBackground.style.backgroundColor = "midnightblue";
      altitude = 10000;
      spaceShuttleHeight.innerHTML = altitude;
      rocketPosY += 10;
      rocket.style.marginBottom = rocketPosY + "px";
    }
  });

  landButton.addEventListener("click", function () {
    alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    resetRocket();
  });

  abortButton.addEventListener("click", function () {
    let confirmAbort = window.confirm(
      "Confirm that you want to abort the mission."
    );
    if (confirmAbort) {
      flightStatus.innerHTML = "Mission aborted.";
      resetRocket();
    }
  });

  //   USE EVENT DELEGATION FOR DIRECTIONAL BUTTONS
  let bgWidth = parseInt(
    window.getComputedStyle(shuttleBackground).getPropertyValue("width")
  );
  this.document.addEventListener("click", function (event) {
    if (event.target.id === "left" && rocketPosX > -(bgWidth / 2 - 40)) {
      rocketPosX -= 10;
      rocket.style.marginLeft = rocketPosX + "px";
    }
    if (event.target.id === "right" && rocketPosX < bgWidth / 2 - 40) {
      rocketPosX += 10;
      rocket.style.marginLeft = rocketPosX + "px";
    }
    if (event.target.id === "up" && altitude < 250000) {
      rocketPosY += 10;
      rocket.style.marginBottom = rocketPosY + "px";
      altitude += 10000;
      spaceShuttleHeight.innerHTML = altitude;
    }
    if (event.target.id === "down" && altitude > 0) {
      rocketPosY -= 10;
      rocket.style.marginBottom = rocketPosY + "px";
      altitude -= 10000;
      spaceShuttleHeight.innerHTML = altitude;
    }
  });

  function resetRocket() {
    shuttleBackground.style.backgroundColor = "olivedrab";
    flightStatus.style.color = "olivedrab";
    altitude = 0;
    spaceShuttleHeight.innerHTML = altitude;
    rocketPosX = 0;
    rocketPosY = 0;
    rocket.style.marginLeft = rocketPosX + "px";
    rocket.style.marginBottom = rocketPosY + "px";
  }
});
// Remember to pay attention to page loading!
