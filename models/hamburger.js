var orm = require("../config/orm.js");

var hamburger = { 
    all: function(){
        return orm.all("hamburgers")
    },

    create: function(cols,vals){ 
        return orm.create("hamburgers",cols, vals)
    },

    update: function(cols, condition){
        return orm.update("hamburgers", cols, condition);
    }

}

module.exports = hamburger;