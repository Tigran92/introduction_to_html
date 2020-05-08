let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//Removing an element
secretMessage.pop();

//Checking the length of the array
console.log(secretMessage.length);

//Adding new elements to the array
secretMessage.push('to', 'Program');

//Checking the array list
//console.log(secretMessage);

//changing the 8th element
secretMessage[7] = 'right';

//Removing the first element
secretMessage.shift();

//Adding an element to the beginning of the array
secretMessage.unshift('Programming');

//Removing several elements and adding 'know'
secretMessage.splice(6, 5, 'know');

//Printing the final array
console.log(secretMessage);

//joinging all the array elements together 
console.log(secretMessage.join(' '));








