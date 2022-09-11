var express = require("express");
var router = express.Router();

/* GET airbnb list */
router.get("/list", function (req, res, next) {
  res.send("respond with a resource");
});

/* GET airbnb 분포 (group by count) */
router.get("/list", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
