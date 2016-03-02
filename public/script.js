 // create the module and name it scotchApp
    var loginApp = angular.module('loginApp', ['ui.router']);

    var sess =false;
    // configure our routes
    loginApp.config(function($stateProvider, $urlRouterProvider ,$httpProvider) {

        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.useXDomain = true;
        $urlRouterProvider.otherwise("/sess_router")

        $stateProvider


            .state('sess_router', {
                url: '/sess_router',
                templateUrl : 'login/test.html',
                controller  : 'sessionController'
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
                controller  : 'welcomeCtrl'
            });

    });


    loginApp.controller('sessionController',['$scope','$rootScope','$location', function($scope,$rootScope,$location) {
        // create a message to display in our view
        $scope.message = 'controller should be in seperate folder!!';
        $rootScope.session=false;
        if ($rootScope.session==true) {
         $location.path( "/zoozoo" );
        }
        else {
         $location.path( "/login" );
        }
     }]);