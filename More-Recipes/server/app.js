const express = require("express");
const app = express();

app.listen(8080, function(err, res){
	if(err){
		console.log("Server mauvais");
	}
	console.log("Server travaille au port:8080");
});

app.use(express.static("website"));




