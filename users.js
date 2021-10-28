var express = require('express');
var router = express.Router();
var val = 0;

router.get('/', function(req, res, next)
{
    val= val+1;
    res.send('User accesses are: '+val)
});
module.exports = router;