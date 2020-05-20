const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    

  get appetizers() {
    return this._appetizers;
   },
  set appetizers(appetizersIn){
    this._appetizers = appetizersIn;
  },
  get mains() {
    return this._mains;
  },
  set mains(mainsIn){
    this._mains = mainsIn;
  },
  get desserts() {
    return this._desserts;
  },
  set desserts(dessertsIn){
    this._desserts = dessertsIn;
    },

  },
  
  get courses() {
      return {
        //these use the appetizer getter method
        appetizers: this.appetizers, 
        mains: this.mains, 
        desserts: this.desserts
      }
    
  }, 
  addDishToCourse(courseName, dishName, dishPrice) {

    const dish = {
      name: dishName,
      price: dishPrice
    };

    this._courses[courseName].push(dish) ;

  },

  getRandomDishFromCourse(courseName){

    const dishes = this._courses[courseName];
     const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];

  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is £${totalPrice}.`;

  }
  
};

//appetizers
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Raspberry Brie Tartlets', 6.50);
menu.addDishToCourse('appetizers', 'Goat Cheese Bites', 5.00);

//mains
menu.addDishToCourse('mains', 'Fish and Chips', 12.00);
menu.addDishToCourse('mains', 'Beef Enchiladas', 13.50);
menu.addDishToCourse('mains', 'Frito Pie', 9.40);

//desserts
menu.addDishToCourse('desserts', 'Carrot Cake', 5.50);
menu.addDishToCourse('desserts', 'Vanilla Ice Cream', 7.50);
menu.addDishToCourse('desserts', 'Strawberry desserts', 3.20);

//Genereate a meal
let meal = menu.generateRandomMeal();
console.log(meal)



