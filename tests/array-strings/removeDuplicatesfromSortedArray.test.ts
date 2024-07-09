import { expect, describe, it } from 'bun:test'

import solution from '../../challenges/array-strings/removeDuplicatesfromSortedArray'

describe('Remove Duplicates from Sorted Array', () => {
  it('a', () => {
    expect(solution([1, 1, 2])).toBe(2)
  })

  it('b', () => {
    expect(solution([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5)
  })
})
