let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

//splitting the text into individual words 
const storyWords = story.split(' ');
//console.log(storyWords);

//Counting the amount of words in the text
// console.log(`There are ${storyWords.length} words in the text`);


let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//Getting rid of unnecessaryWords in the array
const betterWords = storyWords.filter(unWord => !unnecessaryWords.includes(unWord));

// console.log(betterWords.includes('literally'));
// console.log(betterWords);

//Counting overused words in the text 
let overUsed1 = 0;
let overUsed2 = 0;
let overUsed3 = 0;

for (i = 0; i < storyWords.length; i++){
  if(storyWords[i] === 'really') {
    overUsed1++;
  } else if (storyWords[i] === 'very'){
    overUsed2++;
  } else if (storyWords[i] === 'basically')
    overUsed3++;
  
};
// console.log(`The word really was used ${overUsed1} times`);
// console.log(`The word very was used ${overUsed2} times`);
// console.log(`The word basically was used ${overUsed3} times`);

//Counting the number of sentences in the text

let countSentence = 0;

storyWords.forEach(word => {
  if(word[word.length-1] === '.' || word[word.length-1] === '!'){
    countSentence++;
  };
});

// console.log(`There are ${countSentence} sentences in the text.`);

const logCounts = () => { 

  //Counting the amount of words in the text
  console.log(`There are ${storyWords.length} words in the text`);
  //Counting the number of sentences in the text
  console.log(`There are ${countSentence} sentences in the text.`);
  //Counting overused words in the text 
  console.log(`The word really was used ${overUsed1} times`); 
  console.log(`The word very was used ${overUsed2} times`);
  console.log(`The word basically was used ${overUsed3} times`);

  };
  
//Printing all the results
logCounts();

//Printing betterWords array as a single string 
console.log(betterWords.join(' '));







