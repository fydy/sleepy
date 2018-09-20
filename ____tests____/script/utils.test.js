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

describe.skip("Check database", () => {
  const { readDb, writeDb, resetDb, readMeta, delMeta, updateMeta } = utils;

  const cacheDb = readDb();
  resetDb();

  test("readDb", () => {
    expect(typeof readDb()).toBe('object');
    expect(Array.isArray(readDb().posts)).toBeTruthy();
  });

  test("readMeta", () => {
    expect(readMeta('hellow-world').name).toBe('hellow-world');
  });

  test("delMeta", () => {
    delMeta('hellow-world');
    expect(readDb().posts.length).toBe(0);
  });

  writeDb(cacheDb);
});

describe("Clean output file", () => {
  const { cleanFiles } = utils;

  test("cleanFiles", () => {
    expect(Array.isArray(cleanFiles())).toBeTruthy();
  });
});

describe("Before config create", () => {
  const { beforeConfigCreate } = utils;
  
  test("beforeConfigCreate", () => {
    const config = beforeConfigCreate({
      website: {}
    });
    expect(Object.keys(config.website).length).toBeGreaterThan(0);
  });
});

describe("Read post meta", () => {
  const { postData } = utils;

  test("postData", () => {
    expect(postData('hello-world').meta.title).toBe('Hello World');
  });
});