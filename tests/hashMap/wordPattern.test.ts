import { expect, describe, it } from 'bun:test'

import solution from '../../challenges/hashMap/wordPattern'

describe('Word pattern', () => {
  it('a', () => {
    const pattern = 'abba'
    const s = 'dog cat cat dog'
    expect(solution(pattern, s)).toEqual(true)
  })
  it('b', () => {
    const pattern = 'abba'
    const s = 'dog cat cat fish'
    expect(solution(pattern, s)).toEqual(false)
  })
  it('c', () => {
    const pattern = 'abba'
    const s = 'dog dog dog dog'
    expect(solution(pattern, s)).toEqual(false)
  })
  it('d', () => {
    const pattern = 'aaa'
    const s = 'aa aa aa aa'
    expect(solution(pattern, s)).toEqual(false)
  })
})
