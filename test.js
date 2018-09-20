const { dataPath } = require('./script/utils');

const test = require(dataPath().config);

console.log(test)