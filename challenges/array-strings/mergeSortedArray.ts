// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
// representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// 1,2,3,0,0,0 | 2,5,6
//   a           b
//           c

// 1,2,3,0,0,6     2,5,6
// 1,2,3,0,5,6     2,5,6
// 1,2,3,3,5,6     2,5,6
// 1,2,2,3,5,6     2,5,6

export default function solution (nums1: number[], m: number, nums2: number[], n: number): number[] {
  let a = m - 1
  let b = n - 1
  let c = m + n - 1

  while (a >= 0 && b >= 0) {
    if (nums1[a] > nums2[b]) {
      nums1[c] = nums1[a]
      a--
    } else {
      nums1[c] = nums2[b]
      b--
    }
    c--
  }

  while (b >= 0) {
    nums1[c] = nums2[b]
    b--
    c--
  }

  return nums1
}
