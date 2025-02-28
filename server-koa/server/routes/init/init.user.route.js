// ToDo: convert user init from express to koa




// var express = require('express');
// var router = express.Router();
// var User=require('../models/user-model');

// router.get('/',function(req,res,next){
// 	var user=new User({
// 		email: 'CHANGETHIS@FORPETESSAKE.COM',
// 		password: 'CHANGE THIS',
// 		profile: {
// 			firstName: 'JOHN',
// 			lastName: 'SMITH',
// 			businessCode:'BestBuy',     //design allows for multiple businesses 
// 			locationCode:'1202',        //and locations
// 			phone: '9048675309'
// 		},
// 		roles: 'Admin'
// 	})

// 	user.save(function(err){
// 		if (err)
// 			throw err;
// 		console.log ('setup user saved');
// 		res.json({success:true});

// 	});
// });

// module.exports = router;
