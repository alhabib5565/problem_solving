const findEvenAndOddNumber = (array) => {
  const evenOrOdd = {
    even: [],
    odd: [],
  };
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element % 2 !== 0) {
      evenOrOdd.odd.push(element);
    } else {
      evenOrOdd.even.push(element);
    }
  }
  console.log(evenOrOdd);
};

findEvenAndOddNumber([2, 3, 4, 5, 6, 7, 8, 9, 10]); //output: { even: [ 2, 4, 6, 8, 10 ], odd: [ 3, 5, 7, 9 ] }
