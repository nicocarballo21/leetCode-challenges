import { expect, test } from 'bun:test'

import fn from '../challenges/bestTimetoBuyandSellStock'

test('Best Time to Buy and Sell Stock', () => {
  expect(fn([7, 1, 5, 3, 6, 4])).toBe(5)
  expect(fn([7, 6, 4, 3, 1])).toBe(0)
})
