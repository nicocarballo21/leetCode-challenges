
// You are given an integer array nums. You are initially positioned at the array's first index,
// and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// nums = [3,2,1,0,4] 5-2 = 3
// false
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

export default function solution (nums: number[]): boolean {
  let run = true
  let index = 1

  if (nums[0] === 0 && nums.length > 1) return false
  if (nums.length === 1 || nums[0] >= nums.length - 1) return true

  while (run) {
    const canReach = nums.slice(index, nums[index - 1] + index)

    for (let i = 0; i < canReach.length; i++) {
      if (canReach[i] === 0) return false
      if (canReach[i] >= (nums.length - (i + index + 1))) {
        run = false
        return true
      }
    }

    index++
    if (index === nums.length) return false
  }

  return false
}

// export default function solution (nums: number[]): boolean {
//   let max = 0

//   for (let i = 0; i < nums.length; i++) {
//     if (i > max) return false
//     max = Math.max(max, i + nums[i])
//   }

//   return true
// }
