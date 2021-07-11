const http = require('http')
const express = require('express') //공통
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const app = express() //공통
const server = http.createServer(app);
//var path = require('path');
const port = 8080 //add

//app.engine('ejs', require('ejs').__express);



//app.use(express.urlencoded({extended: true})); //미들웨어
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use(expressLayouts)

//app.set('views', __dirname+'/views');
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs');

var db;
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://jina26861:Pa55w.rd@cluster0.cpnf3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function(error, client){
    if (error) return console.log(error)
    db = client.db('todoapp');

    //db.collection('post').insertOne( {제목:'company',주소:'00회사'} , function(error,result){
    //     console.log('저장완료');
     //});
});



app.get('/', function(req, res){
    res.render('index',{MyData: '안녕!'})
});  
app.get('/about', (req,res) => {
    res.render('about')
})
app.get('/write', function(req, res){
    res.sendFile(__dirname + '/form.html')
});
app.post('/add', function(req, res){
    //console.log(req.body.title);console.log(req.body.title);    
    db.collection('post').insertOne( {제목:req.body.title, 날짜:req.body.date} , function(error,result){
        console.log('저장완료');
    });
    res.send('trans...');
});
app.get('/list', function(req, res){
  //  db.collection('post').find().toArray(function(error,result){
   //     console.log(result);
   //     res.render('list.ejs', { posts: result} );
  //  });
    res.render('list.ejs');
});
app.get('/test', function(req, res){
    res.render('index.ejs');
});

app.listen(port, function(){
    console.info(`app listening on port ${port}`)}); 