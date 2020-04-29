//variable that indicates age and is changeable. 
let myAge = 29;
//variable that indicates early years and is changeable.
let earlyYears = 2;

earlyYears = earlyYears * 10.5;
// var laterYears
let laterYears = myAge - 2; 
//laterYears times 4 calculates dog years.
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//This shows my age in dog years.
let myAgeInDogYears = laterYears + earlyYears;
//toLowerCase() method gives string with lowercase letters.
const myName = 'Tigre'.toLowerCase();

// This prints out a statement saying my name, age, and my age in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)






