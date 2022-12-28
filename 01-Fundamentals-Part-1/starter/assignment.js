// Values and Variables  // let, const, var
const country = 'country';
const continent = 'continent';
let population = 316000000;
const finland = 6000000;
const averageCountryPopulation = 33000000;
let description = 'Portugal is in Europe, and its 11 million people speak portuguese';

console.log(country);
console.log(continent);
console.log(population);

// Data Types
let isIsland = false;
let language = 'en';

console.log(isIsland);
console.log(language);

// Basic Operators 

// half population
console.log(population / 2 + ' million');

//add one to population
console.log(population + 1 + ' million');

// Compare population to Finland
if (population > finland) console.log('Heck Yes by ' + (population - finland));

// Ex: Template Literal

// US population vs average population 
if (population > averageCountryPopulation) console.log('Most definitely by ' + (population - averageCountryPopulation))

// Ex: Template Literal

// console log description var 
console.log(description);