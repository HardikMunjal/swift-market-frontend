loginApp.factory("RegisterService", function() {
  var users = ["hardik", "shivika", "riddhi"];

  return {
    all: function() {
      return users;
    },
    first: function() {
      return users[0];
    }
  };
});