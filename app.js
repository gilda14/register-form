var sql=require("mssql");
var connection = mysql.createConnection({
	server:"localhost\\PC021931",
        database:"LMS",
        user:"sa",
        password:"",
});

connection.connect();
connection.query('SELECT * FROM `student`', function(err, rows, fields) {
  if (err) throw err;
  console.log('The rows are: ', rows);
});
connection.end();

//function getEmp(){
	//var conn = new sql.connection(dbConfig);
       // var req = new sql.request(conn);
        

       // conn.connection(function(err){
	   //  if(err){
               // console.log(err);
              //  return;   
            //  }
	//	req.query("select * From Student", function(err,recordset){

		//if(err){
            //    console.log(err);
                   
           //   }
            //     else{
		//	console.log(recordset);
        //
            //     }
		//  conn.close();
       //     });
//
       // });
//
//}

//getEmp()