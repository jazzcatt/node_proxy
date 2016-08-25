var fs = require('fs');
function handle(req, res) {

req.on('data', function(chunk) {

fileHandler(chunk.toString(), res);
	
}); // on data

}


function fileHandler(data, res) {
	fs.exists('./file.txt', (exists) => {
 		if(exists) {
 			 fs.stat('./file.txt', (err, stats)=>{

 			 	 // if file not empty:  read => send => rewrite
 			  	 if(stats['size']){
 			  	 
 			  	 	 fs.readFile('./file.txt', 'utf8', function(err, contents) {
   					 res.writeHead(200, {'Content-Type':'text/plain'});
   					 res.end(contents);

   					 fs.closeSync(fs.openSync('./file.txt', 'w'));
   					 
   					 fs.writeFile("./file.txt", data, function(err) {
  						if(err) {
       					 console.log(err);
   						 } 
					});

					});

 			  	 //if file empty: write => send message
 			   	} else {
 			   		fs.writeFile("./file.txt", data, function(err) {
  						if(err) {
       					 console.log(err);
   						 } else {
   						 res.writeHead(200,{'Content-Type':'text/palin'});	
      					 res.end("File was saved.");	
   						 }
					}); //write file
 			   	}
 			 });
 		//if file not exist: create => write => send message 	 
 		}else {
 			fs.closeSync(fs.openSync('./file.txt', 'w'));

 			 	fs.writeFile("./file.txt", data, function(err) {
  					if(err) {
       				console.log(err);
   					} else {
   						res.writeHead(200,{'Content-Type':'text/palin'});	
      					res.end("File was created and saved");	
   						}
					});
 		} //else 

	}); //fs.exist
}




var Handler = {
	handle: handle
}
exports.Handler = Handler;

/*
	
*/