const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] < val) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7)); // Output: 1 (index of value 2 in the array)
