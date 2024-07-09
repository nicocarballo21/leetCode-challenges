// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
//
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without
// disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
//
//
// Example 1:
//
// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:
//
// Input: s = "axc", t = "ahbgdc"
// Output: false

export default function isSubsequence (s: string, t: string): boolean {
  let pointerOne = 0
  let count = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = pointerOne; j < t.length; j++) {
      if (s[i] === t[j]) {
        pointerOne = j + 1
        count++
        break
      }
    }
  }

  return count === s.length
}
