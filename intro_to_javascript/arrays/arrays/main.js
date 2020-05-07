//Arrays

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

//Create an Array

const hobbies = ['coding', 'football', 'tennis'];
console.log(hobbies);

//Accessing Elements

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];
console.log(listItem);

console.log(famousSayings[2]);
console.log(famousSayings[3]);

//Update Elements

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

//Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

//The .length property

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

//The .push() Method

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('hoover', 'cook');
console.log(chores);

//The .pop() Method

const chores1 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores1.pop();
console.log(chores1);

//More Array Methods

const groceryList1 = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList1.shift();

console.log(groceryList1);

groceryList1.unshift('popcorn');

console.log(groceryList1);

console.log(groceryList1.slice(1, 4));

console.log(groceryList1);

const pastaIndex = groceryList1.indexOf('pasta');

console.log(pastaIndex);

//Arrays and Functions

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  newArr.pop();
};

removeElement(concept);
console.log(concept);

//Nested Arrays

const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];
console.log(target);

