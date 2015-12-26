loginApp.controller('registerController', function($scope,RegisterService) {
        // create a message to display in our view

        RegisterService.list().success(function(data) {
        	$scope.users=data;
        });
        $scope.message = 'api call to be made on click of register';

        $scope.register = function() {
        	console.log($scope.vm.user);
        	RegisterService.registerUser($scope.vm.user).success(function(data) {
        		$scope.notification=data;
        	});
        };

    });