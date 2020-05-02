function getReminder() {
  console.log("Water the plants.");
}

function greetInSpanish() {
  console.log("Buenas Tardes");
}

//Calling a function
function sayThanks() {
  console.log("Thank you for your purchase! We appreciate your business.");
}

sayThanks();
sayThanks();
sayThanks();

//Parameters and Arguments
function sayThanks1(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}

sayThanks1("Cole");

//Default Parameters
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

//Return
function monitorCount(rows, columns) {
  let count = rows * columns;
  return count;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

//Helper functions
function monitorCount1(rows, columns) {
  return rows * columns;
}

function costOfMonitors1(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors1(5, 4);

console.log(totalCost);

//Function Expressions
const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

plantNeedsWater("Tuesday");
console.log(plantNeedsWater("Tuesday"));

//Arrow Functions

// const plantNeedsWater = function(day) {
//   if (day === 'Wednesday') {
//     return true;
//   } else {
//     return false;
//   }
// };
const plantNeedsWater3 = (day) => {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

//Concise Body Arrow Functions

// const plantNeedsWater = (day) => day === 'Wednesday' ? true : false;

const plantNeedsWater1 = (day) => (day === "Wednesday" ? true : false);

plantNeedsWater1("Monday");
console.log(plantNeedsWater1("Monday"));
