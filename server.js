// 1760142 - Nguyễn Nhật Ninh
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

app.set('views', './views');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,res){
  const name = req.query.name||''
  res.render('index',{name});
});

app.get('/sum',function(req,res){
  res.render('sum');
});

app.post('/results',function(req,res){
  const a =Number(req.body.a);
  const b =Number(req.body.b);
  const sum =a + b;
  res.render('results',{a , b, sum});
});

app.get('/covid19',function(req,res){
  res.render('covid19');
});

app.use(express.static('public'))

app.listen(port);
console.log(`Sever is listening on port ${port}`);