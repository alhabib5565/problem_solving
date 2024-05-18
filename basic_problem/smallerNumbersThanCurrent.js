//problem 1365: How Many Numbers Are Smaller Than the Current Number

const smallerNumbersThanCurrent = (nums) => {
  let small = 0;
  let smallerThanCurrentNum = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        console.log(i, j);
        small += 1;
      }
    }
    smallerThanCurrentNum[i] = small;
    small = 0;
  }
  return smallerThanCurrentNum;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // Output: [4, 0, 1, 1, 3];
