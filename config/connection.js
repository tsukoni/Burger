//Connet to mysql and export the connection

var mysql = require('mysql');

var source = {
	localhost: {
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers_db'
	},
	jaws: {
		port: 3306,
        host: 'otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'a5nyyo3f6pbuw4z6',
        password: "x6dgge15q1cxhzub",
        database: "burgers_db" 
	}
};

var connection = mysql.createConnection(source.jaws);

/*if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    });
};*/

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;