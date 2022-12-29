// Values and Variables  // let, const, var
let country = 'United States';
let continent = 'North America';
let population = 316000000;
const finland = 6000000;
const averageCountryPopulation = 3300000;
let description = 'Portugal is in Europe, and its 11 million people speak portuguese';

console.log(country);
console.log(continent);
console.log(population);

// Data Types
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'en';
console.log(language);

// Basic Operators 

// half population
console.log(population / 2 + ' million');

//add one to population
console.log(population++ + ' million');

// Compare population to Finland
if (population > finland) console.log('Way More ' + (population - finland));

// US population vs average population 
if (population > averageCountryPopulation) console.log('Most definitely by ' + (population - averageCountryPopulation))

// console log description var 
console.log(description);

// write var description as a template literal 
let newCountry;
let newContinent;
let newPopulation;
let newLanguage;

newCountry = 'Portugal';
newContinent = 'Europe';
newPopulation = 11000000;
newLanguage = 'portuguese'

const newDescription = `${newCountry} is in ${newContinent}, and its ${newPopulation} people speak ${newLanguage}`;
console.log(newDescription);

// Taking Decisions: if / else Statements
/* If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population) */

/* After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original */

if(population > averageCountryPopulation) {
  console.log(`${country} population is above average.`);
} else {
  console.log(`${country} population is ${averageCountryPopulation - population} below average`);
};

// Type Conversion and Coercion
// . Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;

