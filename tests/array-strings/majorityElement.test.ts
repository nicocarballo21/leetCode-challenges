import { expect, describe, it } from 'bun:test'

import solution from '../../challenges/array-strings/majorityElement'

describe('Majority Element', () => {
  it('a', () => {
    expect(solution([3, 2, 3])).toBe(3)
  })
  it('b', () => {
    expect(solution([2, 2, 1, 1, 1, 2, 2])).toBe(2)
  })
})
