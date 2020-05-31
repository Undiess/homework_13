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

router.post("/api/cats",function(req,res){
    console.log(req.body.name);
    console.log("got it ")
    res.send();
})


module.exports = router;