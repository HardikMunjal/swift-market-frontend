module.exports = function (app) {


 app.get('/_status', function (req, res) {
			    res.write('OK');
			    res.status(200).send();
			  });

 app.get('/', function(req, res, next) {
			    res.render('index.html');
			  });

};