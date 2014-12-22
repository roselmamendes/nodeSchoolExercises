const FIRST_ARGUMENT_IN_COMMAND_LINE = 2;
const MAKING_RIGHT_THE_COUNTING = 1;
var argument = process.argv[FIRST_ARGUMENT_IN_COMMAND_LINE];

var fs = require('fs');

var fileText = fs.readFileSync(argument,'utf8');

var lines = fileText != ""?fileText.split('\n'):{};

console.log(lines.length == undefined?"":lines.length - MAKING_RIGHT_THE_COUNTING);
