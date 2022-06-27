/* File name: Assignment1-Comp229004-301159366, Student’s Name: Fouad Ouardi, StudentID: 301159366, and Date 2022/June/04 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
