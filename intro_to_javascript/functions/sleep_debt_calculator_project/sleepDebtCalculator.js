const getSleepHours = day => {
  switch(day){
    case 'monday':
      return 4;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 3;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 10;
      break;
    case 'sunday':
      return 9;
      break;
    default:
      return 'Type a valid week day!'
  };
};

//console.log(getSleepHours('monday'));

const getActualSleepHours = () => {
 return getSleepHours('monday') + 
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') + 
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

};
//console.log(getActualSleepHours());

const getIdealSleepHours = (hoursPerNight) => {
  // let idealHours = 8;
  // return idealHours * 7;
  return hoursPerNight * 7;

};
//console.log(getIdealSleepHours(10));

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(10);

  const hourDifference = idealSleepHours - actualSleepHours;

  if(actualSleepHours === idealSleepHours) {
    console.log('You got perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more amount of sleep than needed!');
  } else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less amount of sleep than needed! You need to get some rest!');
  };

};
calculateSleepDebt();

