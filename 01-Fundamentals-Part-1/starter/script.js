// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// // log to view in web console
// console.log('Jones');
// console.log(23);

// // variable - add value
// let firstName = 'Matilda';

// console.log(firstName);

// // Descriptive Variable Names

// let myFirstJob = 'programmer';
// let myLastJob = 'teacher';

// console.log(myFirstJob);

// // Boolean value
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// //  TypeOf (show declaration of data type)
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// // Dynamic Typing
// javascriptIsFun = 'YES';
// console.log(typeof javascriptIsFun);

// // Undefined / Null
// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// // Declaring Variables 

// // Can be changed in the future /
// let age = 30; // block scoped
// age = 31; // mutable
// console.log(age);

// // Value never changes + cannot declare empty const variables
// const birthYear = 1991; // immutable
// console.log(birthYear); 

// // Var works the same way as let [ES2015]
// var job = 'programmer'; // function scoped
// job = 'teacher'; // mutable 
// console.log(job); 

// // Basic Operators 
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmear';
// console.log(firstName + " " + lastName); // concatenating

// // Assignment Operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 15
// x *= 4; // x = x * 4 = 100
// x /= 2; // x = x / 2 = 7.5
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 99
// console.log(x);

// // Comparison Operators 
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// // Operator Precedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);
// console.log(25 - 10 - 5);

// // math is executed before equality operators 
// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x,y);

// const averageAge = (ageJonas + ageSarah) / 2; // grouping proceeds math
// console.log(ageJonas, ageSarah);
// console.log(averageAge);

// // Template Literals 

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// // Bad concatenation 
// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

// console.log(jonas);

// // Correct template string
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// // Create a multi-line string
// console.log(`String with\nmultiple\nlines`);

// // Control Structure // Taking Decisions If/Else

// const age = 15;

// if(age >= 18){
//   console.log(`Sara can start driving 🚗`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// };

// const birthYear = 1991;

// let century; // scoped
// if(birthYear <= 2000){
//   century = `20th`;
// } else {
//   century = `21st`;
// }

// // Type Conversion and Type Coercion 

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(String(235), 235);

// // Invalid Number
// console.log(Number('Jonas'));

// // Type Conversion and Coercion

// // type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

////////////////////////////////////
// // Truthy and Falsy Values

// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

////////////////////////////////////
// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amazing number!')
} else if (favorite === 7) {
  console.log('7 is also a cool number')
} else if (favorite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favorite !== 23) console.log('Why not 23?');

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
} 