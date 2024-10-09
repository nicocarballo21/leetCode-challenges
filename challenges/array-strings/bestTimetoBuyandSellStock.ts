export default function solution (prices: number[]): number {
  let maxProfit = 0
  let minPrice = prices[0]
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - minPrice)
  }
  // 1 - 0 = 1
  // 5 - 1 = 4
  // 3 - 1 = 2
  // 6 - 1 = 5
  // 4 - 1 = 3
  return maxProfit
}
