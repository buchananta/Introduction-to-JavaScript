/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 18;
console.log('test votingAge == 18');
console.log(votingAge == 18);

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let x = 'apple';
console.log('\nchange value with conditional statement')
console.log(x);
if ( x == 'apple' ) {
  x = 'not an apple now';
}
console.log(x) ;




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log('\nconvert string "1999" to integer');
let year = '1999';
console.log('year === 1999 is: ' + (year === 1999));
console.log('Number(year) === 1999 is: ' + (Number(year) === 1999));



//Task d: Write a function to multiply a*b 

function mul(a, b) {
  return a * b;
}
console.log('\nshould equal twenty: ' + mul(4, 5));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(humanYears) {
  return humanYears * 7;
}
console.log('\nConvert human years to dog years');
console.log('How old would a 5 year old be in dog years? (5*7) ' + dogYears(5));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFeedCalc(age, weight) {
  if (age < .166) {
      return "too young!"
  } else if (age < .333) {
      return .1 * weight;
  } else if (age < .583) {
      return .05 * weight;
  } else if (age < 1) {
      return .04 * weight;
  } else if (weight < 6) {
      return .05 * weight;
  } else if (weight < 11) {
      return .04 * weight;
  } else if (weight <= 15) {
      return .03 * weight;
  } else if (weight > 15) {
      return .02 * weight;
  }
  return "please enter a valid age and weight";
}
console.log('\ncalculate how much to feed 1 year old, 15lb dog');
console.log(dogFeedCalc(1, 15));




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rPC(plChoice) {
  let choices = ['rock', 'paper', 'scissors'];
  plChoice = plChoice.toLowerCase();
  plChoice = choices.indexOf(plChoice);
  let aiChoice = Math.floor(Math.random() * 3);
  if (plChoice == aiChoice) {
             console.log("Tie!")
  } else if ((plChoice == 0 && aiChoice == 2) ||
             (plChoice == 1 && aiChoice == 0) ||
             (plChoice == 2 && aiChoice == 1)) {
             console.log("You win! " + choices[plChoice] + " beats " + choices[aiChoice]);
  } else if ((plChoice == 0 && aiChoice == 1) ||
             (plChoice == 1 && aiChoice == 2) ||
             (plChoice == 2 && aiChoice == 0)) {
             console.log("You lose " + choices[aiChoice] + " beats " + choices[plChoice]);
  } else { 
             console.log('please input a valid choice. "rock," "paper," or "scissors"');
  }
}
console.log('\nplay a game of rock, paper, scissors:');
console.log(rPC("SCISSORS"));
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(kilometers) {
  return kilometers * .621371;
}
console.log('\n how many miles is 4km? ' + kmToMiles(4));
//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function ftToCm(feet) {
  return feet * 30.48;
}
console.log('\n how many cm is 3ft? ' + ftToCm(3));


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(num) {
  while (num > 0){
    console.log(`${num} bottles of soda on the wall, ${num} bottles of soda, take one down, pass it around, ${--num} bottles of soda on the wall`);
  }
}

console.log('\n');
annoyingSong(3);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function letterGrade(mark) {
  if (mark < 60) return 'F'
  else if (mark < 70) return 'D'
  else if (mark < 80) return 'C'
  else if (mark < 90) return 'B'
  else return 'A'
}


console.log('\nWhat letter grade is a 68? ' + letterGrade(68));
//************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method
function vowelCount(aString) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  aString = Array.from(aString.toLowerCase().split(''));
  aString = aString.filter(letter => vowels.includes(letter));
  return aString.length;
}

console.log('\nhow many vowels are in the word "apples?" ' +vowelCount('apples'));
console.log('how about "onomatopoeia?" ' + vowelCount('onomatopoeia'));



/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

rPC(prompt("lets play Rock, Paper, Scissors! What is your choice?"));



