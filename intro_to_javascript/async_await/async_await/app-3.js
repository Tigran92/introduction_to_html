//The await Operator
const brainstormDinner = require('./library-3.js')


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
    console.log(`I'm going to make ${meal} for dinner.`);
  })
}


// async/await version:
async function announceDinner() {
  // Write your code below:
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}

announceDinner()