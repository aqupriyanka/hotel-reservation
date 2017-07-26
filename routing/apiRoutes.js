"use strict";

(function(){

	module.exports = function(app,data,waitingList){
			app.get("/viewTable", function(req, res) {
				// var jsonRes = buildHtml(data);
				var users = {
			  	"tables" : data,
			  	"waiting" : waitingList
			  }
				res.json(users);

				// return res.json(data);
			//display JSON of all possible friends.
			});

			app.post("/reserve", function(req, res) {
			  var newcharacter = req.body;
			  var reservationMade = false;
			  //handles incoming survey result and compatibility logic
			  // var closetFriend = getClosestFriend(newcharacter.scores, data,res);
			  if(data.length < 5){
			  	data.push(newcharacter);
			  	reservationMade = true;

			  }else{
			  	waitingList.push(newcharacter);
			  	reservationMade = false;
			  }

			  var users = {
			  	"tables" : data,
			  	"waiting" : waitingList,
			  	"reservationMade" : reservationMade
			  }
				// if(data)	
				// 	res.json(data);
				// else
				// 	res.json(waitingList);
				res.json(users);


			});
		}


	function buildHtml(data) {
		  var body1 = '<div class="container">'+
					  '<div class="panel panel-primary" width="500" >'+
					  '<div class="panel-heading text-center">Users</div>'+
					  '<div class="panel-body">';
		  var body = '';
		  var header = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">'+
					  '<link rel="stylesheet" type="text/css" href="/public/css/style.css">';
		  

			body+=body1;
		  for( var i = 0 ; i < data.length; i++)
		        {
		               var a = '<div style="height: 250px;">';
		               var img = '<img src=\"' + data[i].photo + '\" width="200" height="250" style="float:left">';
		               var name = '<p style="float:right"><h2> Name : '+data[i].name+'</h2>';
		               var score = '<h3> Score : '+ (data[i].scores) + '</h3></p></div><hr>';
		               body += a;
		               body += img;
		               body += name;
		               body += score;


		        }
		     body+='</div></div></div>';   
		     var body2= '<div class="container">'+
		        		'<p><a href="/">Home</a> | <a href="https://github.com/aqupriyanka/friend-finder">'+
		        		'GitHub Repo</a></p></div>';

		      body+=body2;
		  // concatenate header string
		  // concatenate body string

		  return '<!DOCTYPE html>'
		       + '<html><header>' + header + '</header><body>' + body + '</body></html>';
		};	

function getClosestFriend(user, friends,res){

	if(friends != null){
		var friendsSum = [];
		for(var j=0; j< friends.length; j++){
			var sum = 0;
			for(var i=0; i< user.length; i++){
				sum += Math.abs(parseInt(user[i]) - parseInt(friends[j].scores[i]));
			}
			friendsSum.push(sum);
		}
		console.log(friendsSum);
		var smallest = friendsSum[0];
		var index = 0;
			for(var z=0; z<friendsSum.length; z++){
				if(friendsSum[z]<smallest){
					smallest=friendsSum[z];
					index = z;
					}
				}
		return friends[index];	

	} else{
			  return null;

	}
}
})();




