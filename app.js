const { data } = require('./src/mockedData/data.js');
const cli = require('./src/service/cli/cli.js');
const filterItems = require('./src/service/filter/filter');
const countItems = require('./src/service/count/count');

const args = cli(process.argv);

const filteredResults = filterItems(args, data);
const countedResults = countItems(args, filteredResults);

console.log(JSON.stringify(countedResults, null, 2));
