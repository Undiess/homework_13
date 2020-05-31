var express = require("express");

var router = express.Router();
var hamburger = require("../models/hamburger.js")

router.get("/",function (req,res){
    hamburger.all()
    .then (hamburger => {
    console.log(hamburger)
    res.render("index", {hamburger})
    });
});

router.post("/api/hamburgers",function(req,res){
    console.log(req.body.name);
    hamburger.create("name",(req.body.name));
    res.send();
});

router.put("/api/hamburgers/:id",function(req,res){
    var ID = {id: req.params.id}
    var condition = {eaten:true}
    hamburger.update(condition,ID)
    .then(result => {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          res.status(404).end();
        }
        else {
          res.status(200).end();
        }
      });
      
    
})


module.exports = router;