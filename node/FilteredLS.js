var fs = require('fs');

fs.readdir('.', function(err, list){
	if(err){
		throw err;
	}
	else
		console.log(list);
})