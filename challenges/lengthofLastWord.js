// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

export default function solution(s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") count++;
    if (s[i] !== " " && s[i - 1] === " ") return count;
  }

  return count;
}
