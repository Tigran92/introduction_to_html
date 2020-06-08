//Handling Errors
const cookBeanSouffle = require('./library-6.js');

// Write your code below:
async function hostDinnerParty() {
  try {

    let resValue = await cookBeanSouffle();
    console.log(`${resValue} is served!`);
   
  } catch(error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
};

hostDinnerParty()


