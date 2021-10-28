var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
      title: "Satya Tummala",
      fact: "I like animals",   
    });
});

module.exports = router;