//Introduction to Iterators
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);


//The .forEach() Method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruitFunc => console.log(`I want to eat a ${fruitFunc}.`));

//The .map() Method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animalIn => animalIn[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];


const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)