/**
 * Created by lynmatten on 06.09.15.
 */

var events = require('events');
var q = require('q');
var Util = require('util');
var mysqlConnectionMock = require('./mysqlConnectionMock.js');




/**
 * @constructor
 */
var mysqlPoolMock = function(config, sqlMock) {

    events.EventEmitter.call(this);

    var that = this;

    that.config = config;
    that.sqlMock = sqlMock;

    //setImmediate(emitStartedConnection, this);

};

function emitStartedConnection(self) {

    self.emit("connection");
}

Util.inherits(mysqlPoolMock, events.EventEmitter);

mysqlPoolMock.prototype.end = function() {



};

mysqlPoolMock.prototype.getConnection = function(cb) {

    var self = this;

    var conn = new mysqlConnectionMock(this.config, this.sqlMock);

    //self.emit('connection', conn);

    if(cb != undefined) {

        if (conn != null && conn != undefined) {
            cb(null, conn);
        }
        else {
            cb(new Error("No connection available"), null);
        }

    }





};


module.exports = mysqlPoolMock;

