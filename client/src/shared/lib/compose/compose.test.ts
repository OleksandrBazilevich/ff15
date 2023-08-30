import { compose } from "./compose";

const firsFn = (num: number) => {
  return num + num;
};
const secondFn = (num: number) => {
  return num * num;
};
const thirdFn = (num: number) => {
  return num / 2;
};

describe("compose", () => {
  test("test 2 fn, firstFn first", () => {
    const composed = compose(secondFn, firsFn);
    expect(composed(4)).toBe(64);
  });
  test("test 2 fn, secondFn first", () => {
    const composed = compose(firsFn, secondFn);
    expect(composed(4)).toBe(32);
  });
  test("test 3 fn", () => {
    const composed = compose(firsFn, secondFn, thirdFn);
    expect(composed(4)).toBe(8);
  });
});
