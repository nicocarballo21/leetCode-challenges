import { expect, describe, it } from 'bun:test'

import solution from '../../../challenges/array-strings/medium/jumpGame'

describe('Jump game - Medium', () => {
  it('a', () => {
    expect(solution([2, 3, 1, 1, 4])).toBe(true)
  })
  it('b', () => {
    expect(solution([3, 2, 1, 0, 4])).toBe(false)
  })
  it('c', () => {
    expect(solution([0])).toBe(true)
  })
  it('d', () => {
    expect(solution([2, 0])).toBe(true)
  })
  it('e', () => {
    expect(solution([1, 1, 1, 0])).toBe(true)
  })
})
