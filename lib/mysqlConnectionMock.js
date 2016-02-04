/**
 * Created by lynmatten on 06.09.15.
 */



var events = require('events');
var q = require('q');
var Util = require('util');




/**
 * @constructor
 */
var mysqlConnectionMock = function(config, sqlMock) {

    events.EventEmitter.call(this);

    this.config = config;
    this.sqlMock = sqlMock;

    setImmediate(emitStartedConnection, this);

};

function emitStartedConnection(self) {

    self.emit("connection", self);
}

Util.inherits(mysqlConnectionMock, events.EventEmitter);

mysqlConnectionMock.prototype.query = function(sqlstr, cb) {


    var err = null;

    var rows = [];

    for(var i = 0; i < this.sqlMock.length; i++) {

        var mockRow = this.sqlMock[i];


        if(mockRow.Query == sqlstr) {
            rows = mockRow.Answer;
        }

    }

    cb(err, rows);

};

mysqlConnectionMock.prototype.release = function() {

};

mysqlConnectionMock.prototype.end = function() {

};

module.exports = mysqlConnectionMock;