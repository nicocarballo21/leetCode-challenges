// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

export default function solution (s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const map = new Map<string, number>()

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) as number + 1)
    } else {
      map.set(s[i], 1)
    }
  }

  console.log(map)

  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      const amount = map.get(t[i])
      if (amount === 0) return false

      map.set(t[i], map.get(t[i]) as number - 1)
      continue
    }

    return false
  }

  return true
}
