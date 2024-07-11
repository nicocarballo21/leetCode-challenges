// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:
//
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:
//
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:
//
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
//
//
// Constraints:
//
// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

export default function solution (pattern: string, s: string): Boolean {
  const map = new Map<string, string>()
  const usedWords: string[] = []

  const words = s.split(' ')

  if (words.length !== pattern.length) return false

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]

    if (!map.has(char) && !usedWords.includes(words[i])) {
      map.set(char, words[i])
      usedWords.push(words[i])
    } else {
      if (map.get(char) !== words[i]) return false
    }
  }

  return true
}

export function optimalSolution (pattern: string, s: string): boolean {
  const words = s.split(' ')
  if (pattern.length !== words.length) return false

  const map = new Map<string, string>()
  const usedWords = new Set<string>()

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]

    if (map.has(char)) {
      if (map.get(char) !== words[i]) return false
    } else {
      if (usedWords.has(words[i])) return false
      map.set(char, words[i])
      usedWords.add(words[i])
    }
  }

  return true
}
