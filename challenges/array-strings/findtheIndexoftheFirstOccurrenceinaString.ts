// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
// or - 1 if needle is not part of haystack.

export function solution (needle: string, haystack: string): number {
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle)
  }
  return -1
}

export function optimalSolution (needle: string, haystack: string[]): number {
  return haystack.indexOf(needle)
}
