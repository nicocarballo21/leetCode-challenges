import { expect, test } from 'bun:test'

import fn from '../challenges/121-BestTimeToBuyAndSellStock'

test('121-BestTimetoBuyandSellStock', () => {
  expect(fn([7, 1, 5, 3, 6, 4])).toBe(5)
  expect(fn([7, 6, 4, 3, 1])).toBe(0)
})
