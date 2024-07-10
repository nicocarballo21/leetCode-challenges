import { expect, describe, it } from 'bun:test'

import solution from '../../challenges/hashMap/happyNumber'

describe('Happy Number', () => {
  it('a', () => {
    expect(solution(19)).toBe(true)
  })
  it('b', () => {
    expect(solution(5)).toBe(false)
  })
  it('c', () => {
    expect(solution(23)).toBe(true)
  })
  it('d', () => {
    expect(solution(7)).toBe(true)
  })
})
