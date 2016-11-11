var connection = require('./connect');

var orm = {
  selectAll: function () {
    var queryString = 'SELECT * FROM burgers;';
    connection.query(queryString,function(err,results) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(name) {
    var queryString = 'INSERT INTO burgers (burger_name,devoured) VALUES ("' + name + '", FALSE);';
    connection.query(queryString,function(err,results) {
      if (err) throw err;
      console.log(results);
    });
  },
  updateOne: function(name) {
    var queryString = 'UPDATE burgers SET devoured=TRUE WHERE name="' + name + '";';
    connection.query(queryString,function(err,results) {
      if (err) throw err;
      console.log(results);
    });
  }
};

module.exports = orm;
