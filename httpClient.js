const FIRST_ARGUMENT_IN_COMMAND_LINE = 2;
var http = require('http');
var url = process.argv[FIRST_ARGUMENT_IN_COMMAND_LINE];
http.get(url,function(response){
	response.setEncoding("utf8");
	response.on("data",function(data){
		console.log(data);
	});
}); 
