loginApp.controller('registerController', function($scope,RegisterService) {
        // create a message to display in our view

        RegisterService.list().success(function(data) {
        $scope.users=data;
        });
        $scope.message = 'api call to be made on click of register';
    });