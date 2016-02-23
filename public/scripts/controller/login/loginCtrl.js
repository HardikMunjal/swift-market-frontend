loginApp.controller('loginController',['$scope','$rootScope','$location','LoginService', function($scope,$rootScope,$location ,LoginService) {

    $scope.user_id='';


    $scope.validateSessionViaLogin = function(){

        $scope.form_data_login={};

        if($scope.email){
            $scope.form_data_login.email=$scope.email;
        }
        if($scope.mobile){
            $scope.form_data_login.mobile=$scope.mobile;
        }
        $scope.form_data_login.password=$scope.password;


        LoginService.loginUser($scope.form_data_login).success(function(data) {
           $scope.notification=data;
           $rootScope.session = true;
           $rootScope.noSession = false;
           $location.path( "/zoozoo" );
       });


        $rootScope.session = true;
        $rootScope.noSession = false;
        $location.path( "/zoozoo" );
    }



 $scope.userValidator = function() {

    if (isNaN($scope.user_id) || !$scope.user_id){

        if ($scope.user_id && $scope.user_id.indexOf('@')<0){
            $scope.notify=true;
            $scope.notificationError= 'This is not valid email';
        }
        else{
            $scope.notify=false;
            $scope.email=$scope.user_id;
        }
    } 
    else{

        if ($scope.user_id && $scope.user_id.length==10){
            $scope.notify=false;
            $scope.mobile=$scope.user_id;
        }
        else{
            $scope.notify=true;
            $scope.notificationError= 'Mobile Number length is Invalid';
        }
    }

};


}]);