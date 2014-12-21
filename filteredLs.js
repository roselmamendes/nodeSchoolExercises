var FIRST_ARGUMENT_IN_COMMAND_LINE = 2;
var pathDirectory = process.argv[FIRST_ARGUMENT_IN_COMMAND_LINE];
var extension = process.argv[FIRST_ARGUMENT_IN_COMMAND_LINE + 1];

var fs = require('fs');
var pathModule = require('path');
fs.readdir(pathDirectory,function(err,list){
	list.forEach(function(file){
		if(pathModule.extname(file).indexOf(extension) != -1){
			console.log(file);
		}
	});
});