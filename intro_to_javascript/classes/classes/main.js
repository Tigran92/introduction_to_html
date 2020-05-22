//Class
class Surgeon {
	//Constructor
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  //Methods
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

//Instance
const surgeonCurry = new Surgeon('Curry', 'Orthopedic');

console.log(surgeonCurry.name);

//Method Calls
surgeonCurry.takeVacationDays(3);

console.log(surgeonCurry.remainingVacationDays)



