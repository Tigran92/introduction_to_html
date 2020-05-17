//The this keyword
const robot = {

  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`

  }
  
};

console.log(robot.provideInfo());

//Arrow Functions and this
//No arrow function with .this
const robot1 = {
  energyLevel: 100,
  checkEnergy(){
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot1.checkEnergy();

//Privacy
//you can cause unwanted side-effects when mutating objects and their properties.
const robot2 = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot2._energyLevel = 'high';
robot2.recharge()

//Getters
const robot3 = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};

console.log(robot3.energyLevel);

