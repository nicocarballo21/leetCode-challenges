import { expect, describe, it } from 'bun:test'

import fn from '../../challenges/array-strings/removeDuplicatesfromSortedArray'

describe('Remove Duplicates from Sorted Array', () => {
  it('a', () => {
    expect(fn([1, 1, 2])).toBe(2)
  })

  it('b', () => {
    expect(fn([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5)
  })
})
