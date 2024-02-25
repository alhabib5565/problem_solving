//problem 1480: Running Sum of 1d Array

const runningSum = (nums) => {
  const sum = (nums) => {
    console.log(nums);
    const total = nums.reduce((acc, current) => {
      return (acc += current);
    }, 0);
    return total;
  };
  let runningSumArr = [0];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    runningSumArr[i] = sum([element, runningSumArr[runningSumArr.length - 1]]);
  }
  return runningSumArr;
};

console.log(runningSum([1, 2, 3, 4])); //output [ 1, 3, 6, 10 ]
