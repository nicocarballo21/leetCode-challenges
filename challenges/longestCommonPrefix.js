// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

export default function solution (strs) {
  if (!strs.length) return ''

  let prefix = ''
  let i = 0
  let currentChar = ''
  let isCommon = true

  while (isCommon) {
    currentChar = strs[0][i]
    if (!currentChar) break

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== currentChar) {
        isCommon = false
        break
      }
    }

    if (isCommon) {
      prefix += currentChar
      i++
    }
  }

  return prefix
}
