loginApp.factory("RegisterService", ['$http', function($http) {
  var users = ["hardik", "shivika", "riddhi"];

  return {
    all: function() {
      return users;
    },
    first: function() {
      return users[0];
    },
    emailExistenceChecker:function(params) {
      return $http({
        url: 'http://0.0.0.0:5000/v1/validate/email?email='+params,
        method: 'GET'
      })
    },
    mobileExistenceChecker:function(params) {
      return $http({
        url: 'http://0.0.0.0:5000/v1/validate/mobile?mobile='+params,
        method: 'GET'
      })
    },
    registerUser:function(params) {
      return $http({
        url: 'http://0.0.0.0:5000/register/user',
        method: 'POST',
        data: params
      })
    },
    list:function() {
    	return $http({
    		url: 'http://0.0.0.0:5000/get/teams',
    		method: 'GET'
    	})
    }
  };
}]);


