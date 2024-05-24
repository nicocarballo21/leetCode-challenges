import { expect, test, it } from "bun:test";

import { solution } from "../challenges/findtheIndexoftheFirstOccurrenceinaString";

test("28", () => {
  it("should return the index of the first occurrence of needle in haystack", () => {
    let haystack = "sadbutsad";
    let needle = "sad";
    expect(solution(needle, haystack)).toBe(0);
  });

  it("should return -1 if needle is not part of haystack", () => {
    let haystack = "leetcode";
    let needle = "leeto";
    expect(solution(needle, haystack)).toBe(-1);
  });
});
