var mysql = require('mysql');
var mySqlClient = mysql.createConnection({
	host : 'localhost',
	user : 'sa',
	password: '',
	database: 'db_Student'
});
var selectQuery = 'SELECT * FROM Student';

var sqlQuery = mySqlClient.query(selectQuery);

sqlQuery.on("result", function (row) {
    console.log('ID: ' + row.id);
    console.log('First Name: ' + row.first_name);
    console.log('Last Name: ' + row.last_name);
    console.log('Age: ' + row.Age);
    console.log('Email: ' + row.email);
    console.log('Last Name: ' + row.Country);
    console.log('Last Name: ' + row.Phone);
    console.log('Last Name: ' + row.Date);
});

sqlQuery.on("end", function () {
    mySqlClient.end();
});

sqlQuery.on("error", function (error) {
    console.log(error);
});