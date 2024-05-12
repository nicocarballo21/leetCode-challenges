import { expect, test } from 'bun:test'

import fn from '../challenges/121-BestTimeToBuyAndSellStock'

test('121-BestTimetoBuyandSellStock', () => {
  expect(fn([7, 1, 5, 3, 6, 4])).toBe(5)
  expect(fn([7, 6, 4, 3, 1])).toBe(0)
  expect(fn([2, 4, 1])).toBe(2)
  expect(fn([1, 2])).toBe(1)
  expect(fn([1, 2, 4, 2, 5, 7, 2, 4, 9, 0])).toBe(8)
  expect(fn([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9])).toBe(9)
})
