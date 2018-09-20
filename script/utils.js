const path = require("path");
const fs = require("fs-extra");
const glob = require("glob");
const importFresh = require("import-fresh");

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
