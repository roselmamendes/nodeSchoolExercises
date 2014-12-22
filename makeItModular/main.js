var FIRST_ARGUMENT_IN_COMMAND_LINE = 2;
var myModule = require('./myModule.js');
var pathDirectory = process.argv[FIRST_ARGUMENT_IN_COMMAND_LINE];
var extension = process.argv[FIRST_ARGUMENT_IN_COMMAND_LINE + 1];
myModule(pathDirectory,extension,function(err,data){
	if(err) throw err;
	data.forEach(function(file){
		console.log(file);
	});
});