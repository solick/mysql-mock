/**
 * Created by lynmatten on 12.09.15.
 */


var mysqlMock = require('./index.js');

var mockObj = [

    {
        "Query": "SELECT * FROM tblConfig",
        "Answer": [{
            "id": 1,
            "version_major": 0,
            "version_minor": 2
        }]
    }

];

mysqlMock.passMockObject(mockObj);


var pool = mysqlMock.createPool({
    connectionLimit: 30,
    host: "someaddress",
    user: "someusername",
    password: "somepassword",
    database: "somedatabase",
    port: "someport"
});

pool.on("connection", function() {

    console.log("pool established");
});


pool.getConnection(function(err, connection) {

    var that = this;

    if(err) {
        console.log("error");
    }

    if(connection) {
        console.log("connection");

        connection.query(mockObj[0].Query, function(err, rows) {

            console.log("correct query rows: ", rows);

        });

        connection.query("Wrong Query", function(err, rows) {

            console.log("wrong query rows: ", rows);
        });



    }

    connection.on("connection", function() {

        console.log("connection etablished");
    });


});

