// Import (require) connection.js into orm.js
// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.

var connection = require('./connection.js');

function objToSql(ob) {
	// column1=value, column2=value2,...
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

var orm = {
	selectAll: function(table, cb){
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function(err, result){
			if (err) throw err;
			cb(result);
		})
	},
	insertOne: function (table, burger_name, cb) {
		var queryString = "INSERT INTO " + table + " (burger_name) VALUES ('" + burger_name + "')";
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function (table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString = queryString + ' SET ';
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;
		console.log(condition);

		// console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
};

module.exports = orm;