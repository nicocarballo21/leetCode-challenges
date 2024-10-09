import { expect, test } from 'bun:test'

import fn from '@challenges/array-strings/medium/bestTimeToBuyAndSellStock'

test('Best Time to Buy and Sell Stock - Medium', () => {
  expect(fn([7, 1, 5, 3, 6, 4])).toBe(7)
  expect(fn([1, 2, 3, 4, 5])).toBe(4)
  expect(fn([7, 6, 4, 3, 1])).toBe(0)
  expect(fn([6, 1, 3, 2, 4, 7])).toBe(7)
})
