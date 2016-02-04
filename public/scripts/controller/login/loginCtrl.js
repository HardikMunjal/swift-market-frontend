loginApp.controller('loginController',['$scope','$rootScope','$location', function($scope,$rootScope,$location) {
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
            $location.path( "/zoozoo" );
        }
    }]);