function sameArray(arr, squareArray) {
  if (arr.length !== squareArray.length) {
    return "Array lengths do not match";
  }

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const currentIndex = squareArray.indexOf(Math.pow(element, 2));
    if (currentIndex === -1) {
      return false;
    }
  }
  return true;
}

// console.log(sameArray([5, 4, 3], [25, 9, 6]));

console.log(sameArray([2, 2, 3], [4, 4, 9])); // Output: true
console.log(sameArray([1, 2, 3], [1, 4, 9])); // Output: true
console.log(sameArray([1, 2, 3], [1, 4])); // Output: "Array lengths do not match"
