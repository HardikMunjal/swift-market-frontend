 // create the module and name it scotchApp
    var loginApp = angular.module('loginApp', ['ngRoute']);

    // configure our routes
    loginApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/login.html',
                controller  : 'loginController'
            })
            .when('/login', {
                templateUrl : 'pages/login.html',
                controller  : 'loginController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })
            .when('/register', {
                templateUrl : 'pages/register.html',
                controller  : 'registerController'
            })
            //route for main pRofile module
            .when('/user_profile', {
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

                