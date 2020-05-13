//Introduction to Iterators
const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

artists.forEach((artist) => {
  console.log(artist + " is one of my favorite artists.");
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squareNumbers);

const things = ["desk", "chair", 5, "backpack", 3.14, 100];

const onlyNumbers = things.filter((thing) => {
  return typeof thing === "number";
});

console.log(onlyNumbers);

//The .forEach() Method
const fruits = ["mango", "papaya", "pineapple", "apple"];

fruits.forEach((fruitFunc) => console.log(`I want to eat a ${fruitFunc}.`));

//The .map() Method
const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

const secretMessage = animals.map((animalIn) => animalIn[0]);

console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map((num) => num / 100);

console.log(smallNumbers);

//The .filter() Method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers1 = randomNumbers.filter((smallNum) => {
  return smallNum < 250;
});

console.log(smallNumbers1);

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter((longWord) => {
  return longWord.length > 7;
});

console.log(longFavoriteWords);

//The .findIndex() Method
const animals1 = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals1.findIndex((name) => {
  return name === "elephant";
});

const startsWithS = animals1.findIndex((names) => {
  return names[0] === "s";
});

console.log(foundAnimal);
console.log(startsWithS);

//The .reduce() Method
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

//Iterator Documentation
const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// .some() method

console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

//.filter() method

const interestingWords = words.filter((longword) => {
  return longword.length > 5;
});

console.log(interestingWords);

// .every() method

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);

//Choose the Right Iterator
const cities1 = [
  "Orlando",
  "Dubai",
  "Edinburgh",
  "Chennai",
  "Accra",
  "Denver",
  "Eskisehir",
  "Medellin",
  "Yokohama",
];

const nums1 = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities1.reduce((city) => console.log("Have you visited " + city + "?"));

// Choose a method that will return a new array
const longCities = cities1.filter((city) => city.length > 7);

// Choose a method that will return a single value
const word1 = cities1.reduce((acc, currVal) => {
  return acc + currVal[0];
}, "C");

console.log(word1);

// Choose a method that will return a new array
const smallerNums1 = nums1.map((num) => num - 5);

// Choose a method that will return a boolean value
nums1.some((num) => num < 0);
