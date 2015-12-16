loginApp.factory("RegisterService", ['$http', function($http) {
  var users = ["hardik", "shivika", "riddhi"];

  return {
    all: function() {
      return users;
    },
    first: function() {
      return users[0];
    },
    list:function() {
    	return $http({
    		url: 'http://0.0.0.0:5000/get/teams',
    		method: 'GET'
    	})
    }
  };
}]);


