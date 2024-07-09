// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
//
// Each letter in magazine can only be used once in ransomNote.
//
//
//
// Example 1:
//
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
//
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
//
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

export default function solution (ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>()

  for (const char of magazine) {
    map.set(char, (map.get(char) ?? 0) + 1)
  }

  for (const char of ransomNote) {
    if (map.get(char) === undefined || map.get(char) === 0) return false
    map.set(char, (map.get(char) ?? 0) - 1)
  }

  return true
}

// Other solution
export function otherSolution (ransomNote: string, magazine: string): boolean {
  const n = ransomNote.length
  for (let i = 0; i < n; i++) {
    if (magazine.includes(ransomNote[i])) {
      const indx = magazine.indexOf(ransomNote[i])
      magazine = magazine.slice(0, indx) + magazine.slice(indx + 1)
      continue
    }
    return false
  }
  return true
};
