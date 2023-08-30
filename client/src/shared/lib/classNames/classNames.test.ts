import { classNames } from "./classNames";

describe("classNames", () => {
  test("with 1 param", () => {
    expect(classNames("class")).toBe("class");
  });
  test("with mods true", () => {
    expect(classNames("class", { someCls1: true, someCls2: true })).toBe(
      "class someCls1 someCls2"
    );
  });
  test("with mod false", () => {
    expect(classNames("class", { someCls1: false, someCls2: true })).toBe(
      "class someCls2"
    );
  });
  test("with additionals", () => {
    expect(classNames("class", {}, ["additionals"])).toBe("class additionals");
  });

  test("with mods, additionals", () => {
    expect(
      classNames("class", { someCls1: false, someCls2: true }, ["additionals"])
    ).toBe("class additionals someCls2");
  });
});
