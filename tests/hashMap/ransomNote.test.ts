import { expect, describe, it } from 'bun:test'

import solution from '../../challenges/hashMap/ransomNote'

describe('Ransom Note', () => {
  it('a', () => {
    const ransomNote = 'a'
    const magazine = 'b'
    expect(solution(ransomNote, magazine)).toBe(false)
  })
  it('b', () => {
    const ransomNote = 'aa'
    const magazine = 'ab'
    expect(solution(ransomNote, magazine)).toBe(false)
  })
  it('c', () => {
    const ransomNote = 'aa'
    const magazine = 'aab'
    expect(solution(ransomNote, magazine)).toBe(true)
  })
})
