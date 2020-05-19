const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
    },
    get courses() {
      return {
        appetizers: this.appetizersIn, 
        mains: this.mainsIn, 
        desserts: this.dessertsIn
      }
    
  }, 
  get appetizers() {
    return this._courses.appetizers;

  },
  set appetizers(appetizersIn){
    this._courses.appetizers = appetizersIn;
  },
   get mains() {
     return this._courses.mains;
  },
  set mains(mainsIn){
    this._courses.mains = mainsIn;
  },
   get desserts() {
     return this._courses.desserts;
  },
  set desserts(dessertsIn){
    this._courses.desserts = dessertsIn;
  },
  oddDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    };

    this._courses[courseName].push(dish);

  },
  getRandomDishFromCourse: function (courseName){
    const dishes = courseName;
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];

  },
   generateRandomMeal: function() {
     const appetizer = this.getRandomDishFromCourse(this._courses.appetizers);
     const main = this.getRandomDishFromCourse(this._courses.mains);
     const dessert = this.getRandomDishFromCourse(this._courses.desserts);
     const totalPrice = appetizer.price + main.price + dessert.price;
     return  totalPrice;
  
  
  },
}
menu.oddDishToCourse('appetizers', 'Caesar Salad', 4.25);

let meal = menu.generateRandomMeal();
console.log(meal);

