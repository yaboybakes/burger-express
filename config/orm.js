var connection = require('../config/connect.js');

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table + ' (' + cols.toString() + ') VALUES (' + add_string(vals.length) + ') ';
        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = 'UPDATE ' + table + ' SET ' + convert_to_SQL(objColVals) + ' WHERE ' + condition;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: function(table, condition, cb) {
        var queryString = 'DELETE FROM ' + table + ' WHERE ' + condition;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

function add_string(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

function convert_to_SQL(ob) {
    var arr = [];
    for (var key in ob) {
        if (ob.hasOwnProperty(key)) {
            arr.push(key + '=' + ob[key]);
        }
    }
    return arr.toString();
}

module.exports = orm;
