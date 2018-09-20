const utils = require("../../script/utils");

describe("Check paths", () => {
  const { dataPath, themePath } = utils;

  test("Data path", () => {
    expect(Object.keys(dataPath()).length).toBeGreaterThan(0);
  });

  test("Theme path", () => {
    expect(Object.keys(themePath()).length).toBeGreaterThan(0);
  });
});
