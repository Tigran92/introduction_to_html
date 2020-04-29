// var kelvin is staying the same so the var is constant.
const kelvin = 0;
// celsius is constant too and is 273 less than kelvin.
const celsius = kelvin - 273;
// In this case fahrenheit is going to change its value so it's let.
let fahrenheit = celsius * (9/5) + 32;
// Using Math.floor() we're rounding down the value.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${kelvin} degrees Kelvin.`);

console.log(`The temperature is ${celsius} degrees Celsius.`);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);





