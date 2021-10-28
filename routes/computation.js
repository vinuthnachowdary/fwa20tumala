var express = require("express");
var router = express.Router();
var random;
var log2;
var cosh;
var floor;

router.get("/", function(req, res, next)
{
    random = Math.random() * (100 - 1) +1;
    log2 = Math.log2(random);
    cosh = Math.cosh(random);
    floor = Math.floor(random);
    res.send(`The value of Math.log2(0 is ${log2} <br>
        The value of Math.cosh is ${cosh} <br>
        The value of Math.floor(0 is ${floor}`);
});
module.exports = router;