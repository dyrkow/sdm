import { hello } from "./another";

describe("some test", () => {
  it("h", () => {
    const expected = hello();

    expect(expected).toBe("hello");
  });
});
