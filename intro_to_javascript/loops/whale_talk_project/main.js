//variables
const input = 'a whale of a deal!';
let vowels = ['a', 'e', 'i', 'o', 'u'];
//result array
const resultArray = [];
//iterate through each letter of var input
for (let i = 0; i < input.length; i++) {
  //iterate through letter in var vowels 
  for (let j = 0; j < vowels.length; j++){

    //console.log('i is ' + i);
    
  //checking if the letters in input have vowels, it compares with vowels letters. adds the vowels to resultArrays 
    if(input[i] === vowels[j]) {
      resultArray.push(input[i]);
    };

  };


  //if there is a letters 'e' or 'u' adds the vowels to resultArrays 
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  } else if (input[i] === 'u') {
    resultArray.push(input[i]);
  };
};
//joins all the letters together to form a word, also makes it uppercase letters and logs the final result
console.log(resultArray.join('').toUpperCase());

