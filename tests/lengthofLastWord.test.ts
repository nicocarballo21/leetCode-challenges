import { expect, describe, it } from 'bun:test'

import solution from '../challenges/lengthofLastWord'

describe('Length of Last Word', () => {
  it('a', () => {
    const s = 'Hello World'
    expect(solution(s)).toBe(5)
  })
  it('b', () => {
    const s = '   fly me   to   the moon  '
    expect(solution(s)).toBe(4)
  })
  it('c', () => {
    const s = 'luffy is still joyboy'
    expect(solution(s)).toBe(6)
  })
  it('d', () => {
    const s = 'a'
    expect(solution(s)).toBe(1)
  })
})
