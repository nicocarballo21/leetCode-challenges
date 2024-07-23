import { expect, describe, it } from 'bun:test'

import solution from '../../challenges/hashMap/validAnagram'

describe('Valid Anagram', () => {
  it('a', () => {
    expect(solution('anagram', 'nagaram')).toEqual(true)
  })
  it('b', () => {
    expect(solution('rat', 'car')).toEqual(false)
  })
  it('c', () => {
    expect(solution('a', 'ab')).toEqual(false)
  })
  it('c', () => {
    expect(solution('aacc', 'ccac')).toEqual(false)
  })
})
