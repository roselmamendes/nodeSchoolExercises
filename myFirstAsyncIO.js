const FIRST_ARGUMENT_IN_COMMAND_LINE = 2;
const MAKING_RIGHT_THE_COUNTING = 1;
var fs = require('fs');
var file = process.argv[FIRST_ARGUMENT_IN_COMMAND_LINE];
fs.readFile(file,"utf8",function(err,data){
	if(err) throw err;
	var lines = data != ""?data.split("\n"):{};
	console.log(lines.length == undefined?"":lines.length - MAKING_RIGHT_THE_COUNTING);
});
