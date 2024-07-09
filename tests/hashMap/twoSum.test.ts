import { expect, describe, it } from 'bun:test'

import solution from '../../challenges/hashMap/twoSum'

describe('Two sum', () => {
  it('a', () => {
    const nums = [7, 2, 11, 15]
    const target = 9
    expect(solution(nums, target)).toEqual([0, 1])
  })
  it('b', () => {
    const nums = [3, 2, 4]
    const target = 6
    expect(solution(nums, target)).toEqual([1, 2])
  })
  it('c', () => {
    const nums = [2, 5, 5, 11]
    const target = 10
    expect(solution(nums, target)).toEqual([1, 2])
  })
  it('d', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    expect(solution(nums, target)).toEqual([0, 1])
  })
})
