// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.
//
// Given a string s, return true if it is a palindrome, or false otherwise.

export default function solution (s: string): boolean {
  const lowercase = s.toLowerCase().split('')

  let cleanString = ''

  for (let i = 0; i < lowercase.length; i++) {
    const char = lowercase[i]
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      cleanString += char
    }
  }

  let w = cleanString.length - 1

  for (let i = 0; i < cleanString.length; i++) {
    if (cleanString[i] !== cleanString[w]) return false
    w--
  }

  return true
}
