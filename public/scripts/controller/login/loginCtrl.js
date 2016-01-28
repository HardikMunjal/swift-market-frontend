loginApp.controller('loginController',['$scope','$rootScope', function($scope,$rootScope) {
        // create a message to display in our view
        // $scope.session = true;
        // if ($scope.session==true){
        // $location.path( "/contact" );
        // }
        $scope.message = 'controller should be in seperate folder!!';
        $scope.session = true;

        $scope.validateSession = function(){
        	$rootScope.session = true;
            $rootScope.noSession = false;
        }
    }]);