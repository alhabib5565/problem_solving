/* 
Given an array of integers nums and an integer target, check if there are two numbers in the array such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You should return true or false.

Example 1:

Input: nums = [2,7,11,15], target = 9 
Output: true 
Output: Because nums[0] + nums[1] == 9, we return true.
Example 2:

Input: nums = [2,7,11,15], target = 18 
Output: true 
Output: Because nums[1] + nums[2] == 18, we return true.
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

function twoSum(nums, target) {
  // your code goes here
  const numSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numSet.has(complement)) return true;
    numSet.add(nums[i]);
    console.log(numSet);
  }
  return false;
}

console.log(twoSum([2, 7, 11, 15], 9));
