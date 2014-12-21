var argument = process.argv[2];

var fs = require('fs');

var file = fs.readFileSync(argument);

var fileText = file.toString();
var lines = {};

if(fileText != ""){
	lines = fileText.split('\n');
}

console.log(lines.length == undefined?"":lines.length - 1);