import { expect, describe, it } from 'bun:test'

import solution from '../challenges/longestCommonPrefix'

describe('Longest Common Prefix', () => {
  it('a', () => {
    const s = ['flower', 'flow', 'flight']
    expect(solution(s)).toBe('fl')
  })
  it('b', () => {
    const s = ['dog', 'racecar', 'car']
    expect(solution(s)).toBe('')
  })
  it('c', () => {
    const s = ['flower', 'flower', 'flower', 'flower']
    expect(solution(s)).toBe('flower')
  })
})
