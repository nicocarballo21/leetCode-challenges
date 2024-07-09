import { expect, describe, it } from 'bun:test'

import solution from '../challenges/isSubsequence'

describe('Is Subsequence', () => {
  it('a', () => {
    const s = 'abc'
    const t = 'ahbgdc'
    expect(solution(s, t)).toBe(true)
  })
  it('b', () => {
    const s = 'axc'
    const t = 'ahbgdc'
    expect(solution(s, t)).toBe(false)
  })

  it('c', () => {
    const s = 'acb'
    const t = 'ahbgdc'
    expect(solution(s, t)).toBe(false)
  })
  it('d', () => {
    const s = 'bb'
    const t = 'ahbgdc'
    expect(solution(s, t)).toBe(false)
  })
  it('e', () => {
    const s = 'ab'
    const t = 'baab'
    expect(solution(s, t)).toBe(true)
  })
})
