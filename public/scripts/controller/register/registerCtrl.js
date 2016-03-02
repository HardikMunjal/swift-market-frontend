loginApp.controller('registerController', function($scope,RegisterService,$location,$rootScope) {
        // create a message to display in our view

        $scope.emailExisterMessage='';
        $scope.mobileExisterMessage='';

        RegisterService.list().success(function(data) {
        	$scope.users=data;
        });
        $scope.form_data={};
        $scope.message = 'api call to be made on click of register';

        $scope.register = function() {
        	RegisterService.registerUser($scope.form_data).success(function(data) {
        		$scope.notification=data;
                if (confirm("User details are registered successfully!  Now press OK to continue") == true) {
                    $rootScope.session = true;
                    $rootScope.noSession = false;
                    $location.path( "/zoozoo" );
                } else {
                 var x = "You pressed Cancel!";
             }
             $rootScope.session = true;
             $rootScope.noSession = false;
             $location.path( "/zoozoo" );
         });
        };

        $scope.emailExistenceChecker = function() {

           RegisterService.emailExistenceChecker($scope.form_data.email).success(function(data) {
                
                if (data[0].total>0) {
                   $scope.emailExisterMessage='Sorry Bro Email Id is already registered';
                } else {
                 $scope.emailExisterMessage='Email Id is available';
             }
             
         });

        };

        $scope.mobileExistenceChecker = function() {

           RegisterService.mobileExistenceChecker($scope.form_data.mobile).success(function(data) {
                
                if (data[0].total>0) {
                   $scope.mobileExisterMessage='Sorry Bro MObile No. is already registered';
                } else {
                 $scope.mobileExisterMessage='Mobile No. is available';
             }
             
         });

        };

    });