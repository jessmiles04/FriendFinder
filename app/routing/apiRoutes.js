//get route to /api/friends

var path = require('path');

//function totalDifference
var totalDifference = 0;

//Display as module--Hopefully
 var friends = require('../data/friends.js');

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
    res.json(friends);

}); 

//Should create a seperate file for friend data

    app.post('/api/friends', function(req, res){

        var greatMatch = {
            name: "",
            image: "",
            matchDifference: 1000,
            description: ""
        };

        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var totalDifference = 0;

        //loop through the friends array for match
        for(var i = 0; i < friends.length-1; i++){
            console.log(friends[i].name);
            totalDifference = 0;

            //loop through that friends score and the users score and calculate the best match, found on stack overflow
            for(var j = 0; j < 10; j++){
                // calculates total difference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                // checks to see if the score is better than the current best match, if not runs the function again with next on list
                if (totalDifference <= greatMatch.matchDifference){

                    // runs function again for best match
                    greatMatch.name = friends[i].name;
                    greatMatch.photo = friends[i].photo;
                    greatMatch.matchDifference = totalDifference;
                    greatMatch.description = friends[i].description;
                }
            }
        }

        friends.push(userData);
 
        res.json(greatMatch);
    });
};


