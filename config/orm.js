var connection = require("../config/connection.js");

var orm = {

    all: function(table){
        var queryString = "SELECT * FROM ??"
        return connection.query(queryString,[table]);
    },

    create: function(table,cols,vals){
        var queryString = " INSERT INTO ?? (??) VALUES (?)";
        return connection.query(queryString,[table,cols,vals]);
    },

    update: function(table, cols, condition) {
        var queryString = "UPDATE ?? SET ? WHERE ?";
        return connection.query(queryString, [table, cols, condition])
      },









};











module.exports = orm;
