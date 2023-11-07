var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//显示网页表单
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Express' });
});
router.post('/form', function(req, res, next) {
  res.send("上传成功")
});

module.exports = router;
