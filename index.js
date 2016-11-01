var express= require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
mongoose.connect('mongodb://nigel:farage@ds029117.mlab.com:29117/hdisound')


var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var tone_analyzer = new ToneAnalyzerV3({
  username: '8fbc8e10-c882-4809-b991-b94f19c20570',
  password: '2LMq1bHt5ieu',
  version_date: '2016-05-19'
})

tone_analyzer.tone({ text: 'Greetings'},
function(err,tone){
  if(err)
  console.log(err);
  else {
     console.log(JSON.stringify(tone, null, 2));
  }});


  tone_analyzer.tone({text: "I am very happy that this project is working. Jimmy and Andy make a great team!"},function(err,tone){
    if(err)
      console.log(err);
    else {
       console.log(JSON.stringify(tone, null, 2));
    }
  })



  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use('/api', router);


  app.get('/', function(req,res){
    res.json({message: "F YES"});
  });
  app.get('/api', function(req,res){
    res.json({message: "API!"})
  })


  app.listen(port);
  console.log("Server spinning on" + port);
