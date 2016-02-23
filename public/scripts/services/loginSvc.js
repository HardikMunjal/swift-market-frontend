loginApp.factory("LoginService", ['$http', function($http) {
  var users = ["Peter", "Daniel", "Nina"];

  return {
    all: function() {
      return users;
    },
    loginUser:function(params) {
    	console.log(params);
      return $http({
        url: 'http://0.0.0.0:5000/v1/login/',
        method: 'POST',
        data: params
      })
    }
  };
}]);