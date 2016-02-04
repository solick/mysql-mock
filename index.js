/**
 * Created by lynmatten on 06.09.15.
 */


var mysqlOrig = require('mysql');

/** provides a Mock für mysql and substitutes relevant parts with a Mock class. The rest will be passed to the original mysql module **/


var sqlMock = [];

exports.passMockObject = function(mockObj) {

    if(mockObj != undefined && Array.isArray(mockObj) ) {
        sqlMock = mockObj;
    }
};


/**
 * Create a new Connection instance.
 * @param {object} config
 * @public
 */
exports.createConnection = function createConnection(config) {

    return mysqlOrig.createConnection(config);
};

/**
 * Create a new Pool instance.
 * @param {object} config
 * @public
 */
exports.createPool = function createPool(config) {
    var mysqlPoolMock = require('./lib/mysqlPoolMock.js');

    return new mysqlPoolMock(config, sqlMock);


};

/**
 * Create a new PoolCluster instance.
 * @param {object} config
 * @public
 */
exports.createPoolCluster = function createPoolCluster(config) {

    return mysqlOrig.createPoolCluster(config);
};

/**
 * Create a new Query instance.
 * @public
 */
exports.createQuery = function createQuery(sql, values, callback) {

    mysqlOrig.createQuery(sql, values, callback);
};

/**
 * Escape a value for SQL.
 * @param {*} value
 * @param {boolean} [stringifyObjects=false]
 * @param {string} [timeZone=local]
 * @public
 */
exports.escape = function escape(value, stringifyObjects, timeZone) {

    return mysqlOrig.escape(value, stringifyObjects, timeZone);
};

/**
 * Escape an identifier for SQL.
 * @param {*} value
 * @param {boolean} [forbidQualified]
 * @public
 */
exports.escapeId = function escapeId(value, forbidQualified) {

    return mysqlOrig.escapeId(value, forbidQualified);
};

/**
 * Format SQL and replacement values into a SQL string.
 * @param {string} sql
 * @param {array} [values]
 * @param {boolean} [stringifyObjects=false]
 * @param {string} [timeZone=local]
 * @public
 */
exports.format = function format(sql, values, stringifyObjects, timeZone) {

    return mysqlOrig.format(sql, values, stringifyObjects, timeZone);
};


