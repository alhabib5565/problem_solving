// problem: Build Array from Permutation

const permutation = (nums) => {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
};

console.log(permutation([0, 2, 1, 5, 3, 4]));
