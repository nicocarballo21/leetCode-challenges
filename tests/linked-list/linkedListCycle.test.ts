import { expect, describe, it } from 'bun:test'

import solution from '../../challenges/linked-list/linkedListCycle'

describe('Linked List Cycle', () => {
  it('a', () => {
    expect(solution(
      {
        val: 3,
        next: {
          val: 2,
          next: {
            val: 0,
            next: {
              val: -4,
              next: null
            }
          }
        }
      }
    )).toBe(true)
  })
  it('b', () => {
    expect(solution(
      {
        val: 1,
        next: {
          val: 2,
          next: null
        }
      }
    )).toBe(true)
  })
  it('c', () => {
    expect(solution(
      {
        val: 1,
        next: null
      }
    )).toBe(false)
  })
})
