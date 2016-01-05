//currently if you open localhost:4000/open/chat , the chat client will get connected with chat server and it will work.

// but now i am converting this into angular js, earlier i was using  j query....
// currently it is not working as there is jquery/javascript code in the html file. BUt it will not work now,
// because now i am using angular routes, where i define the controllers, 
//so now all the jquery /javascript code now to be rewrite incontroller or u can say in angular way



loginApp.controller('UserProfileController', function($scope) {

	$scope.load = function() { 
		document.getElementById("demo").innerHTML = "Hello JavaScript!";
	};

        // create a message to display in our view
        $scope.messageUser = 'User Profile!!';
    });