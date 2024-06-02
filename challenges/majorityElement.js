// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

export default function solution(nums) {
  let s = {};
  for (let i = 0; i < nums.length; i++) {
    if (s[nums[i]]) {
      s[nums[i]] += nums[i];
    } else {
      s[nums[i]] = nums[i];
    }
  }

  return +Object.entries(s).sort((a, b) => a[1] < b[1])[0][0];
}
