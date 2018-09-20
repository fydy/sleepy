const path = require("path");
const fs = require("fs-extra");
const glob = require("glob");
const importFresh = require("import-fresh");
const markdownit = require("markdown-it")();
const he = require("he");
const writeJson = require("write-json");
const dayjs = require("dayjs");

exports.dataPath = function() {
    const paths = {}
    const dataDir = glob.sync(path.join(process.cwd(), "src/data/*"));
    dataDir.forEach(item => paths[path.basename(item)] = item);
    return paths;
};

exports.themePath = function() {
    const paths = {}
    const config = importFresh(exports.dataPath().config);
    const themeDir = glob.sync(path.join(process.cwd(), "src/theme", config.theme, '*'));
    themeDir.forEach(item => paths[path.basename(item)] = item);
    return paths;
};

exports.htmlList = function() {
    const pages = exports.themePath().pages;
    return glob.sync(path.join(pages, '*.html')).map(item => {
      const filename = path.basename(item).toLowerCase();
      return {
        filename: filename,
        template: path.resolve(item)
      };
    });
};

exports.mdToText = function(md) {
    const truncateString = (str, num) => str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + "..." : str;
    const config = importFresh(exports.dataPath().config);
    const htmlData = markdownit.render(md);
    const stripedHtml = htmlData.replace(/<[^>]*>/g, "").replace(/[\r\n]/g, "");
    const decodedStripedHtml = he.decode(stripedHtml);
    return truncateString(decodedStripedHtml, config.website.post.excerpt);
};

exports.readDb = function() {
    return importFresh(exports.dataPath().database);
};

exports.writeDb = function(data) {
    const dbPath = path.join(exports.dataPath().database, 'index.json');
    writeJson.sync(dbPath, data);
};

exports.resetDb = function() {
    exports.writeDb({
        "posts": [
            {
                "title": "Hellow World!",
                "type": "",
                "poster": "",
                "topic": "hellow, world",
                "sticky": false,
                "name": "hellow-world",
                "excerpt": "Hellow World!",
                "link": "/post.html?name=hellow-world",
                "creatDate": dayjs().format("YYYY-MM-DD HH:mm:ss")
            }
        ]
    });
};

exports.readMeta = function readMeta(name) {
    const { posts } = exports.readDb();
    return posts.find(item => item.name === name) || {};
};