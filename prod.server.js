var express = require('express')
var compression = require('compression')
var data = require('./data/index')
var app = express() 
var router = express.Router()

router.get('/getData',function(req,res){
	res.json(data);
})

app.use(compression())
app.use('/api',router)
app.use(express.static('./dist'))



module.exports = app.listen(9000,(error)=>{
	if(error){
		console.log(error);
		return
	}
	console.log('listening at http://localhost:' + 9000 +'\n')
})
