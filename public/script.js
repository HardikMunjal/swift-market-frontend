 // create the module and name it scotchApp
    var loginApp = angular.module('loginApp', ['ui.router']);

    // configure our routes
    loginApp.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/login")

        $stateProvider

            // route for the home page
            .state('login', {
                url: '/login',
                templateUrl : 'pages/login.html',
                controller  : 'loginController'
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
                controller  : 'registerController'
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
            });
    });

    // create the controller and inject Angular's $scope

    loginApp.controller('aboutController', function($scope) {
        $scope.message = 'HEy this is hardik, Get ready for the big';
    });

    loginApp.controller('contactController', function($scope) {
        $scope.message = 'Contact me at hardik.munjaal@gmail.com, if you want to contribute to this app';
    });

                