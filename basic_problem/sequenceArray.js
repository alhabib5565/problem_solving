const sequence = (sequenceArray) => {
  for (let index = 1; index < sequenceArray.length; index++) {
    const currentElement = sequenceArray[index];
    const previousElement = sequenceArray[index - 1];
    if (previousElement > currentElement) {
      return false;
    }
  }
  return true;
};

console.log(sequence([1, 3, 2, 1]));
console.log(sequence([1, 2, 3]));
