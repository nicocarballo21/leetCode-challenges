import { expect, describe, it } from 'bun:test'

import solution from '../challenges/longestCommonPrefix'
import { measureExecutionTime } from '../utils'

describe('Longest Common Prefix', () => {
  measureExecutionTime(solution, ['flower', 'flow', 'flight'])

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
