var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express111' ,test1:'express2'});
});
router.get("/login",function(req,res){
  res.render('login',{title:'login...'});
});
router.get("/logout",function(req,res){
  res.render('logout',{title:'logout...'});
});
router.get('/reg',function(req,res){
  res.render('reg',{title:'reg...'});
});

module.exports = router;
