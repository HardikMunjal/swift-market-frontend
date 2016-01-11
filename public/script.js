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
                templateUrl : 'pages/register.html',
                controller  : 'registerController'
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

                