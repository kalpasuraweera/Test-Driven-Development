const { power } = require(".");

describe("Test Power", () => {
  it("Gives 2 to the power 3", () => {
    let ans = power(2, 3);
    expect(ans).toBe(8);
  });
});
