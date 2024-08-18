import { expect, describe, it } from 'bun:test'

import solution from '../../challenges/array-strings/mergeSortedArray'

describe('Merge sorted array', () => {
  it.only('a', () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const m = 3
    const nums2 = [2, 5, 6]
    const n = 3
    expect(solution(nums1, m, nums2, n)).toEqual([1, 2, 2, 3, 5, 6])
  })
  it.skip('b', () => {
    const nums1 = [1]
    const m = 1
    const nums2: number[] = []
    const n = 0
    expect(solution(nums1, m, nums2, n)).toEqual([1])
  })
  it.skip('c', () => {
    const nums1 = [0]
    const m = 0
    const nums2: number[] = [1]
    const n = 1
    expect(solution(nums1, m, nums2, n)).toEqual([1])
  })
})
