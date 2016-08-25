var Handler = require('./handler').Handler;

function router(req, res, file) {
	if(req.method == 'POST'){
		Handler.handle(req,res);
	} else {
		file.serve(req,res);
	}	
}


exports.router = router;



