/**
 * Created by lynmatten on 27.10.15.
 */


var expect = require('chai').expect;
var mysqlMock = require('../index.js');

describe('mysqlMock base construct', function() {

    it('should be a valid object', function () {

        expect(mysqlMock).to.exist;

    });

});

describe('mysqlMock general interface', function() {

    it('should have a createConnection function', function() {

        expect(mysqlMock.createConnection).to.exist;
    });
    it('should have a createPool function', function() {

        expect(mysqlMock.createPool).to.exist;
    });
    it('should have a createPoolCluster function', function() {

        expect(mysqlMock.createPoolCluster).to.exist;
    });
    it('should have a createQuery function', function() {

        expect(mysqlMock.createQuery).to.exist;
    });
    it('should have a escape function', function() {

        expect(mysqlMock.escape).to.exist;
    });
    it('should have a escapeId function', function() {

        expect(mysqlMock.escapeId).to.exist;
    });
    it('should have a format function', function() {

        expect(mysqlMock.format).to.exist;
    });
/*
    it('should have a releaseConnection function', function() {

        expect(mysqlMock.releaseConnection).to.exist;
    });
*/


});

describe("mysqlMock pool", function() {

    it("should create a pool", function() {

        var pool = mysqlMock.createPool({
            connectionLimit: 30,
            host: "someaddress",
            user: "someusername",
            password: "somepassword",
            database: "somedatabase",
            port: "someport"
        });

        expect(pool).to.exist;
    });
});

describe("mysqlMock pool.getConnection", function() {




    it("should create and pass pool connection object via callback", function(done) {

        var pool = mysqlMock.createPool({
            connectionLimit: 30,
            host: "someaddress",
            user: "someusername",
            password: "somepassword",
            database: "somedatabase",
            port: "someport"
        });


        pool.getConnection(function(err, conn) {
            if(conn != undefined && conn != null) {
                done();
            }
        });



    });
/*

    it("should add a connection to the connectionList", function() {

        expect.fail(0, 0, 'Not implemented yet!');

    });
*/

});

/*
describe("mysqlMock pool.releaseConnection", function() {

    it("should remove a connection from the connection list", function() {

        expect.fail(0, 0, 'Not implemented yet!');
    });


});*/
