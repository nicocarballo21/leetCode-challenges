import { expect, test, it } from 'bun:test'

import { solution } from '../challenges/findtheIndexoftheFirstOccurrenceinaString'

test('28', () => {
  it('should return the index of the first occurrence of needle in haystack', () => {
    const haystack = 'sadbutsad'
    const needle = 'sad'
    expect(solution(needle, haystack)).toBe(0)
  })

  it('should return -1 if needle is not part of haystack', () => {
    const haystack = 'leetcode'
    const needle = 'leeto'
    expect(solution(needle, haystack)).toBe(-1)
  })
})
