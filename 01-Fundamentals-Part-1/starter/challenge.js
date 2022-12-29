// Challenge one

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.


TEST DATA 1: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
TEST DATA 2: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// Calculation 
// BMI = mass / height ** 2;

// Test Data 1 // create store variable for each person
const weightMarkOne = 95;
const heightMarkOne = 1.88;
const weightJohnOne = 85;
const heightJohnOne = 1.76;

console.log(weightMarkOne, heightMarkOne, weightJohnOne, heightJohnOne);

// Test Data 2 // create store variable for each person
const weightMarkTwo = 78;
const heightMarkTwo = 1.69;
const weightJohnTwo = 92;
const heightJohnTwo = 1.95;

console.log(weightMarkTwo, heightMarkTwo, weightJohnTwo, heightJohnTwo);

// Test Data 1 // Calculate BMI of each person
let markBMIOne = weightMarkOne / heightMarkOne ** 2;
let johnBMIOne = weightJohnOne / heightJohnOne ** 2;

console.log('Marks First BMI is ' + Math.ceil(markBMIOne));
console.log('Johns First BMI is ' + Math.ceil(johnBMIOne));

// Test Data 2 // Calculate BMI of each person
let markBMITwo = weightMarkTwo / heightMarkTwo ** 2;
let johnBMITwo = weightJohnTwo / heightJohnTwo ** 2;

console.log('Marks Second BMI is ' + Math.floor(markBMITwo));
console.log('Johns Second BMI is ' + Math.floor(johnBMITwo));

// Check Marks BMI against Johns 

let markHigherBMI;

// Data Check One
if (markBMIOne > johnBMIOne)
{ console.log(markHigherBMI = true)} else {
  console.log(markHigherBMI = false);
};

// answer: false

// Data Check Two
if (markBMITwo > johnBMITwo)
{ console.log(markHigherBMI = true)} else {
  console.log(markHigherBMI = false);
};

// answer: true 

// Challenge 2 

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

let levelDayOne;
let winnerDayOne = `John`;
let loserDayOne = `Mark`;
let highestBMIOne = Math.max(markBMIOne, johnBMIOne);
let lowestBMIOne = Math.min(markBMIOne, johnBMIOne);
let bmiDifferenceOne = Math.ceil(highestBMIOne - lowestBMIOne);

if(Math.ceil(highestBMIOne) >= 28) {
  levelDayOne = 'higher'
  // Data One
  console.log(`${winnerDayOne}'s BMI of ${Math.ceil(highestBMIOne)} is ${levelDayOne} than ${loserDayOne}'s by ${bmiDifferenceOne}`
);
} else {
  console.log(`No one wins here in Data One`)
};

let levelDayTwo;
let winnerDayTwo = `Mark`;
let loserDayTwo = `John`;
let highestBMITwo = Math.max(markBMITwo, johnBMITwo);
let lowestBMITwo = Math.min(markBMITwo, johnBMITwo);
let bmiDifferenceTwo = Math.ceil(highestBMITwo - lowestBMITwo);

if(Math.ceil(highestBMITwo) >= 27) {
  levelDayTwo = 'higher'
  // Data Two
  console.log(`${winnerDayTwo}'s BMI of ${Math.floor(highestBMITwo)} is ${levelDayTwo} than ${loserDayTwo}'s by ${bmiDifferenceTwo}`
);
} else {
  console.log(`No one wins here in Data One`)
};

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
