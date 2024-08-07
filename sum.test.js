const { sum } = require("./index");

describe("Test Sum Function", () => {
  it("Adds 1 and 2", () => {
    let total = sum(1, 2);
    expect(total).toBe(3);
  });

  it("Adds 1 and 0", () => {
    let total = sum(1, 0);
    expect(total).toBe(0);
  });
});
