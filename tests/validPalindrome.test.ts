import { expect, describe, it } from 'bun:test'

import solution from '../challenges/validPalindrome'

describe('Valid palindrome', () => {
  it('a', () => {
    expect(solution('A man, a plan, a canal: Panama')).toBe(true)
  })
  it('b', () => {
    expect(solution('race a car')).toBe(false)
  })
  it('c', () => {
    expect(solution(' ')).toBe(true)
  })
})
