//1. Write a function that can print any random number between any two given numbers (including them).
const randomNumber = (min, max) => {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
};
// randomNumber(2, 5);

//2. How can you order roll numbers of students in your class sequentially?
const rollOrder = (rollArr) => {
  const sorted = rollArr.sort((a, b) => a - b);
  console.log(sorted);
};
// rollOrder([12, 2, 345, 23]); // output : [ 2, 12, 23, 345 ]

//3. How can you order the names of students in your class sequentially?
const nameOrder = (names) => {
  const sortedByName = names.sort();
  console.log(sortedByName);
};
// nameOrder(["habib", "imran", "netun", "fahim vai"]); // output : [ 'fahim vai', 'habib', 'imran', 'netun' ]

// 4. Write a function that can tell us whether a year is a leap year or not.
const isLeapYear = (year) => {
  if (((year % 100 !== 0) | (year % 400 === 0)) & (year % 4 === 0)) {
    return `${year} is leap year`;
  } else {
    return false;
  }
};
// console.log(isLeapYear(2024));

//5. How would you determine the number of vowels in a sentence?
const numberOfVowels = (sentence) => {
  const splited = sentence.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let numberOfVowel = 0;
  splited.forEach((letter) => {
    if (vowels.includes(letter.toLowerCase())) {
      numberOfVowel += 1;
    }
  });
  return numberOfVowel;
};

console.log(numberOfVowels("I am habib")); // output: 4
