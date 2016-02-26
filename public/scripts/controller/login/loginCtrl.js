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
     }).error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with status
        // code outside of the <200, 400) range
         $scope.parentNotifier=true;
         $scope.notificationError= data.error;
         $rootScope.session = false;
         $rootScope.noSession = true;
         $location.path( "/login" );
     });;

     }



 $scope.userValidator = function() {

    if (isNaN($scope.user_id) || !$scope.user_id){

        if ($scope.user_id && $scope.user_id.indexOf('@')<0){
            $scope.notify=true;
            $scope.validationError= 'This is not valid email';
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
            $scope.validationError= 'Mobile Number length is Invalid';
        }
    }

};


}]);