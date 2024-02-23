/* Q: What is flattening? 
 Ans: Flattening an array means converting a multidimensional array into a one-dimensional array, where all nested arrays are "flattened" into individual elements.
 */
const nestedArray = [1, 22, [2, 3], [4, [5, 6]]];

const flatten = (nestedArray) => {
  return nestedArray.reduce((acc, currentValue) => {
    console.log({ acc, currentValue });
    return Array.isArray(currentValue)
      ? acc.concat(flatten(currentValue))
      : acc.concat(currentValue);
  }, []);
};

console.log(flatten(nestedArray));
// console.log("use flat method", nestedArray.flat(Infinity));
