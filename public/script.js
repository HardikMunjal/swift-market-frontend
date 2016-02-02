 // create the module and name it scotchApp
    var loginApp = angular.module('loginApp', ['ui.router']);

    var sess =false;
    // configure our routes
    loginApp.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/sess_router")

        $stateProvider

            // route for the home page
           .state('swift', {
                url: '/swift',
                templateUrl : 'pages/login.html',
                controller  : 'loginController'
            })
        
            .state('swift.login', {
                url: '/login',
                templateUrl: 'pages/login.html',
                controller : 'loginController'
            })
            
            // url will be /form/interests
            .state('swift.global_profile', {
                url: '/profile',
                templateUrl: 'pages/register/register-profile.html'
            })

            .state('sess_router', {
                url: '/sess_router',
                templateUrl : 'login/test.html',
                controller  : 'sessionController',
                onEnter: function($rootscope) {
                 $rootscope.session = false;
                 $rootscope.noSession = true;
                }
            })
            

            .state('login', {
                url: '/login',
                templateUrl : 'pages/login.html',
                controller  : 'loginController',
                onEnter: function(){
                  if(sess){ $state.go('about')}
                }
            })

            // route for the about page
            .state('about', {
                url: '/about',
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .state('contact', {
                url: '/contact',
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })
            .state('register', {
                url: '/register',
                templateUrl : 'pages/register/register.html',
                controller  : 'registerController',
                onEnter: function(){
                  if(sess){ $state.go('about')}
                }
            })
        
            // nested states 
            // each of these sections will have their own view
            // url will be nested (/form/profile)
            .state('register.credential', {
                url: '/credential',
                templateUrl: 'pages/register/register-credential.html'
            })
            
            // url will be /form/interests
            .state('register.profile', {
                url: '/profile',
                templateUrl: 'pages/register/register-profile.html'
            })

            .state('register.securer', {
                url: '/securer',
                templateUrl: 'pages/register/register-securer.html'
            })

            //route for main pRofile module
            .state('user_profile', {
                url: '/user_profile',
                templateUrl : 'pages/profile/UserProfile.html',
                controller  : 'UserProfileController'
            })

            .state('zoozoo', {
                url: '/zoozoo',
                templateUrl : 'pages/zoozoo/welcome.html',
                controller  : 'zoozooController'
            });

    });

    // create the controller and inject Angular's $scope

    loginApp.controller('aboutController', function($scope) {
        $scope.message = 'Hey this is hardik, Get ready for the big';
    });

    loginApp.controller('contactController', function($scope) {
        $scope.message = 'Contact me at hardik.munjaal@gmail.com, if you want to contribute to this app';
    });

    // loginApp.controller('sessionController', function($scope) {
    //     // create a message to display in our view
    //     $scope.message = 'controller should be in seperate folder!!';
    //     $scope.session = false;
    //     $scope.noSession = true;

    // });

    loginApp.controller('sessionController',['$scope','$rootScope','$location', function($scope,$rootScope,$location) {
        // create a message to display in our view
        $scope.message = 'controller should be in seperate folder!!';
        $rootScope.session = true;
        $rootScope.noSession = false;

        if ($rootScope.session==true) {
         $location.path( "/zoozoo" );
        }
        else {
         $location.path( "/login" );
        }
     }]);

                
