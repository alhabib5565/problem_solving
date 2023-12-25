// write a function that take an array and value find the value from the array and return the index of find the value

const linearSearch = (arr, value) => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === value) {
      return index;
    }
  }
  return -1;
};

console.log(linearSearch([2, 33, 44, 234, 10], 44)); // output: 2

/* const findIndex = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(value)) {
      return arr.indexOf(value);
    } else {
      return -1;
    }
  }
}; */
