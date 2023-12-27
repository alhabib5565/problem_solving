const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      console.log("i", i, "j", j);
      if (array[lowest] > array[j]) {
        lowest = j;
      }
    }

    [array[i], array[lowest]] = [array[lowest], array[i]];
  }
  return array;
};

console.log(selectionSort([8, 3, 4, 6, 2]));
