// 1760142 - Nguyễn Nhật Ninh
const express = require('express')
const port = process.env.PORT || 3000;

const app = express();

app.get('/',function(req,res){
  const name = req.query.name||'world';
  res.end(`Hello ${name} from express`);
});

app.listen(port);
console.log(`Sever is listening on port ${port}`);