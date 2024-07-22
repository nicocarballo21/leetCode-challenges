// Given an integer array nums and an integer k,
// return true if there are two distinct indices i and j in the array such that
//  nums[i] == nums[j] and abs(i - j) <= k.

export default function solution (nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true
      }
    }
  }
  return false
}

export function optimalSolution (nums: number[], k: number): boolean {
  const set = new Set<number>()

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true
    set.add(nums[i])
    if (set.size > k) set.delete(nums[i - k])
  }
  return false
}
