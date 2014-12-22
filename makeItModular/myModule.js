
module.exports = function(pathDirectory,extension,callback){
	var fs = require('fs');
	var pathModule = require('path');
	fs.readdir(pathDirectory,function(err,data){
		if(err){
			return callback(err);
		}
		var filteredList = [];
		data.forEach(function(file){
			if(pathModule.extname(file).indexOf(extension) != -1){
				filteredList.push(file);
			}
		});

		callback(null,filteredList);
	});
}