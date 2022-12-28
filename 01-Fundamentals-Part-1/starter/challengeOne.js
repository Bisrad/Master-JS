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

console.log('Marks First BMI is ' + Math.floor(markBMIOne));
console.log('Johns First BMI is ' + Math.floor(johnBMIOne));

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