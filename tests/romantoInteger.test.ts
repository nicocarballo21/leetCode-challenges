import { expect, test, it } from 'bun:test'

import solution from '../challenges/romantoInteger'

test('Roman to Integer', () => {
  it('a', () => {
    const inputA = 'III'
    expect(solution(inputA)).toBe(3)
  })
  it('b', () => {
    const inputB = 'LVIII'
    expect(solution(inputB)).toBe(58)
  })
  it('c', () => {
    const inputC = 'MCMXCIV'
    expect(solution(inputC)).toBe(1994)
  })
})
