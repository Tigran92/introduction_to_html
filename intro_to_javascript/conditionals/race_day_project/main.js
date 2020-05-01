let raceNumber = Math.floor(Math.random() * 1000);

const earlyReg = true;
const age = 20;

if (earlyReg === true && age > 18) {
  raceNumber += 1000;
};

if (earlyReg === true && age > 18) {
  console.log(`The race for you will begin at 9:30 am. Your race number is ${raceNumber}`);
} else if (age > 18 && earlyReg === false) {
  console.log(`The race for you will begin at 11:00 am. Your race number is ${raceNumber}`);
} else if (age === 18){
  console.log(`The race for you will begin at 12:30 pm. Your race number is ${raceNumber}`);
} else {
  console.log('Please see the registration desk.')
};




