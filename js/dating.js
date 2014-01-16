


/*function datingQ(){
  console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------userID: "+userID);
                    var DatingAnswer = Parse.Object.extend("DatingAnswer");
                    var FacebookUser = Parse.Object.extend("FacebookUser");
                    var innerQuery = new Parse.Query(DatingAnswer);
					innerQuery.exists("user1");
                    var queryUser = new Parse.Query(FacebookUser);
                    query.matchesQuery("userId", innerQuery);
                    query.find({
                               success: function(results) {
                               console.log("Successfully retrieved " + results.length + ".");
                               
                               
                               for (var i = 0; i < results.length; i++) { 
    							  var object = results[i];
    							 console.log("Results " + object.userName+ ".");
    							}
                               }
                               error: function(error) {
                               alert("Error: " + error.code + " " + error.message);
                               }
                               });


}*/

function datingQ(){
   // console.log("uuuuuserID: "+userID);
    var FacebookUser = Parse.Object.extend("FacebookUser");
    var queryUser = new Parse.Query(FacebookUser);
    queryUser.notEqualTo("userId", userID);
    queryUser.find({
                   success: function(results) {
                 //  alert("Successfully retrieved " + results.length + ".");
                   for (window.i = 0; i < results.length;) {
                   var object = results[i].get('userId');
                   var pic = results[i].get('userPic');
                 
                   console.log("Results " + object+ ".");
                   answered(object, pic);
                   i++
                   }
                   }
                   });
}
 var w = 0;
function answered(ans, pic){
    console.log(ans+" -- "+pic);
   
    var DatingAnswers = Parse.Object.extend("DatingAnswers");
    var queryA = new Parse.Query(DatingAnswers);
    queryA.equalTo("user1", userID);
    queryA.equalTo("user2", ans);
    queryA.find({
                success: function(results2) {
               // alert("2 Successfully retrieved  " + results2.length + ".");
                if (results2.length == 0){
                $('#busy').hide();
                $('#employeeList').empty();
                console.log("item: "+w);
                window["item"+w]  = '<img src="'+pic+'"/>';
                w++
                $('#employeeList').append(item1);
               
                //item0.appendTo($('#employeeList')).slideDown("fast");

                }
                else{
               // datingQ();
                }
                }
                });
    

}
