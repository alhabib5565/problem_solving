const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      console.log(i, j);
      if (array[i] < array[j - 1]) {
        [array[i], array[j - 1]] = [array[j - 1], array[i]];
      }
    }
  }
  return array;
};

console.log(insertionSort([8, 2, 4, 3]));
