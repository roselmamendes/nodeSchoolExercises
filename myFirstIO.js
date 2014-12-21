var argument = process.argv[2];

var fs = require('fs');

var fileText = fs.readFileSync(argument,'utf8');

var lines = fileText != ""?fileText.split('\n'):{};

console.log(lines.length == undefined?"":lines.length - 1);