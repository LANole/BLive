

module.exports = function(app){
	
	app.post('/contact', function(req,res){

		var api_key = 'key-2451a2b90a87be616ab68b8f7c8f97ea';
		var domain = 'sandbox7dedeb0d5d384b6a8ce4f49165204257.mailgun.org';
		var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
		 
		var data = {
		  from: 'Website inquiry <postmaster@sandbox7dedeb0d5d384b6a8ce4f49165204257.mailgun.org>',
		  to: 'tbridgeman78@gmail.com',
		  subject: req.body.first_name+" has sent you a message",
		  html:
			  req.body.first_name+" ..."+
			  req.body.last_name+" ..."+
			  req.body.email+" ..."+
			  req.body.phone+" ..."+
			  req.body.address+" ..."+
			  req.body.city+" ..."+
			  req.body.state+" ..."+
			  req.body.zip+" ..."+
			  req.body.website+" ..."+
			  req.body.job+" ..."+			  
		  	  req.body.description
		};
		 
		mailgun.messages().send(data, function (error, body) {
		  console.log(body);
		  console.log("working...");
		  if(!error)
		    res.send("Your message has been sent");
		  else
		  	res.send("Uh oh... something went wrong!");
		});
	});
}