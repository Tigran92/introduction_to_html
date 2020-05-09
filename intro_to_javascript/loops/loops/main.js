//The For Loop
for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}

//Looping in Reverse
for (let counter1 = 3; counter1 >= 0; counter1--) {
  console.log(counter1);
}

//Looping through Arrays
const vacationSpots = ["Bali", "Paris", "Tulum"];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

//Nested Loops
const bobsFollowers = ["Jim", "Jane", "Pete", "Dave"];
const tinasFollowers = ["Rose", "Dave", "Jim"];

let mutualFollowers = [];

for (let i1 = 0; i1 < bobsFollowers.length; i1++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (tinasFollowers[j] === bobsFollowers[i1]) {
      mutualFollowers.push(bobsFollowers[i1]);
    }
  }
}
console.log(mutualFollowers);

//The While Loop
const cards = ["diamond", "spade", "heart", "club"];

let currentCard;

while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//Do...While Statements
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  console.log(cupsAdded);
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);

//The break Keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i2 = 0; i2 < rapperArray.length; i2++) {
  console.log(rapperArray[i2]);
  if (rapperArray[i2] === "Notorious B.I.G.") {
    break;
  }
}

console.log("And if you don't know, now you know.");
