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