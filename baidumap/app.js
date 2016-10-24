var express = require('express');
var app = express();

app.use(express.static('public'));

// app.get('/', function(req, res){
//     res.redirect('index');
// })

app.listen(3000, function(){
    console.log('服务器运行于3000端口');
})