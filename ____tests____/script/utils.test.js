const utils = require("../../script/utils");

describe("Check paths", () => {
  const { dataPath, themePath } = utils;

  test("dataPath", () => {
    expect(Object.keys(dataPath()).length).toBeGreaterThan(0);
  });

  test("themePath", () => {
    expect(Object.keys(themePath()).length).toBeGreaterThan(0);
  });
});

describe("Check html list", () => {
  const { htmlList } = utils;

  test("htmlList", () => {
    expect(htmlList().length).toBeGreaterThan(0);
  });
});

describe("Markdown to text", () => {
  const { mdToText } = utils;
  const md = `### Test1\nTest2`;

  test("mdToText", () => {
    expect(mdToText(md)).toBe('Test1Test2');
  });
});

describe("Check database", () => {
  const { readDb, writeDb, resetDb, readMeta } = utils;

  const db = readDb();
  resetDb();

  test("readDb", () => {
    expect(typeof db).toBe('object');
    expect(Array.isArray(db.posts)).toBeTruthy();
  });

  test("readMeta", () => {
    expect(readMeta('hellow-world').name).toBe('hellow-world');
  });

  writeDb(db)
});