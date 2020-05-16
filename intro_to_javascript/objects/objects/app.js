//Creating Object Literals
let fasterShip = { 
  color: 'silver' , 'Fuel Type': 'Turbo Fuel' 
};

//Accessing Properties
let spaceship1 = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceship1.numCrew;
let planetArray = spaceship1.flightPath;

console.log(planetArray)
console.log(crewCount)

//Bracket Notation
let spaceship2 = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

let isActive = spaceship2['Active Mission'];

console.log(spaceship2['Active Mission']);

//Property Assignment
let spaceship3 = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship3.color = 'glorious gold';
//adding property
spaceship3.numEngines = 7;
//Deleting property
delete spaceship3['Secret Mission'];

//Methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat () {
    console.log(retreatMessage);
  },

  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }

};

alienShip.retreat();
alienShip.takeOff();

//Nested Objects
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods':  ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

const capFave = spaceship.crew.captain['favorite foods'][0];

console.log(capFave);

spaceship.passengers = [{captain: 'Sandra'}, {crewMember: 'Mark'}];

console.log(spaceship.passengers);


const firstPassenger = spaceship.passengers[0];

console.log(firstPassenger);

//Pass By Reference
let spaceship4 = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = obj => {
  obj['Fuel Type'] =  'avocado oil';
};

let remotelyDisable = obj => {
  obj.disabled = true;
};

greenEnergy(spaceship4);
remotelyDisable(spaceship4);

console.log(spaceship4);

//Looping Through Objects
let spaceship5 = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

//Iterating through the spaceship.crew and listing crew roles and names.
for (let crewMember in spaceship5.crew) {
  console.log(`${crewMember}: ${spaceship5.crew[crewMember].name}`)
};

//Iterating through the spaceship.crew and listing crew names and degrees 
for (let crewPerson in spaceship5.crew) {
  console.log(`${spaceship5.crew[crewPerson].name}: ${spaceship5.crew[crewPerson].degree}`)
};






