loginApp.controller('registerController', function($scope,RegisterService) {
        // create a message to display in our view

        $scope.users = RegisterService.all();
        $scope.message = 'api call to be made on click of register';
    });