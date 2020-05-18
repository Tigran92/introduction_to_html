//The this keyword
const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};

console.log(robot.provideInfo());

//Arrow Functions and this
//No arrow function with .this
const robot1 = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot1.checkEnergy();

//Privacy
//you can cause unwanted side-effects when mutating objects and their properties.
const robot2 = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

robot2._energyLevel = "high";
robot2.recharge();

//Getters
const robot3 = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return "My current energy level is " + this._energyLevel;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  },
};

console.log(robot3.energyLevel);

//Setters
const robot4 = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },

  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      return (this._numOfSensors = num);
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};

robot4.numOfSensors = 100;
console.log(robot4.numOfSensors);
console.log(robot4._numOfSensors);

//Factory Functions
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

const tinCan = robotFactory("P-500", true);
tinCan.beep();

//Property Value Shorthand
function robotFactory1(model, mobile) {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory1("P-501", false);
console.log(newRobot.model);
console.log(newRobot.mobile);

//Destructured Assignment
const robot5 = {
  model: "1E78V2",
  energyLevel: 100,
  functionality: {
    beep() {
      console.log("Beep Boop");
    },
    fireLaser() {
      console.log("Pew Pew");
    },
  },
};

const { functionality } = robot5;
functionality.beep();

//Built-in Object Methods
const robot6 = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75,
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot6);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot6);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot1 = Object.assign(
  { laserBlaster: true, voiceRecognition: true },
  robot6
);

console.log(newRobot1);
