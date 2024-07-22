import { expect, describe, it } from 'bun:test'

import solution from '../../challenges/hashMap/containsDuplicateII'

describe('Contain dulicate II', () => {
  it('a', () => {
    expect(solution([1, 2, 3, 1], 3)).toBe(true)
  })
  it('b', () => {
    expect(solution([1, 0, 1, 1], 1)).toBe(true)
  })
  it('c', () => {
    expect(solution([1, 2, 3, 1, 2, 3], 2)).toBe(false)
  })
})
