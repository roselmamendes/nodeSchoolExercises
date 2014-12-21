var arguments = process.argv;
var programArg = 0;
for(var i = 2; i < arguments.length; i++){
	programArg += parseInt(arguments[i]);	
}

console.log(programArg);