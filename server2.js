 
const express = require('express');
const app = express();
//const expressLayouts = require('express-ejs-layouts')

app.use(express.urlencoded({extended:true}));
//app.use(expressLayouts)

app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');
app.engine('ejs',require('ejs').__express);

app.get('', function(요청,응답){
    응답.render('index')
})
app.get('/ejs', function(req, res){
    res.render('index')
})
app.get('/test', function(req, res){
    res.render('list')
})

app.listen(8080, function(error){
    console.log(error);
})

//ejs test file