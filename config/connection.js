//Connet to mysql and export the connection

var mysql = require('mysql');

var source = {
	localhost: {
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers_db'
	}
};

var connection = mysql.createConnection(source.localhost);

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;