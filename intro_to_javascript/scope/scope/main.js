//Blocks and Scope
const city = "New York City";

const logCitySkyline = () => {
  let skyscraper = "Empire State Building";

  return "The stars over the " + skyscraper + " in " + city;
};
console.log(logCitySkyline());

//Global Scope

const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";

const callMyNightSky = () => {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
};

console.log(callMyNightSky());

//Block Scope
function logVisibleLightWaves() {
  const lightWaves = "Moonlight";
  console.log(lightWaves);
}

logVisibleLightWaves();
//can't access lightWaves as it is a local variable.
//console.log(lightWaves);

//Scope Pollution
const satellite1 = "The Moon";
const galaxy1 = "The Milky Way";
let stars1 = "North Star";

const callMyNightSky1 = () => {
  stars1 = "Sirius";

  return "Night Sky: " + satellite1 + ", " + stars1 + ", " + galaxy1;
};

console.log(callMyNightSky1());
console.log(stars1);

//Practice Good Scoping
const logVisibleLightWaves1 = () => {
  let lightWaves1 = "Moonlight";
  let region1 = "The Arctic";
  // Add if statement here:
  if (region1 === "The Arctic") {
    return true;
    let lightWaves1 = "Northern Lights";
    console.log(lightWaves1);
  }

  console.log(lightWaves1);
};

console.log(logVisibleLightWaves1());
