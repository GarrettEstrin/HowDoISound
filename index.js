var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var inputRoutes = require('./server/routes/input.js')
var inputCtrl = require('./server/controllers/input.js')
var inputText = require('./myModule.js')
var dotenv = require('dotenv').load({silent: true})



// mongoose.connect(process.env.MONGO_URL, function(err){
//   if(err) return console.log(err)
//   console.log("Connect to DB");
// })

var Input = require('./server/models/input.js')



//MIDDLEWARE
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

app.use(express.static('client'))

//ROUTES FOR /



app.use('/api', inputRoutes)

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/client/index.html')
});


app.listen(port, function(err) {
  console.log(err || "Listening on port " + port)
})
//ROUTES FOR /API
// app.route('/api')
//
//   .get(inputCtrl.index)
//
//   .post(inputCtrl.create)
//
// app.route('/api/inputs')
//
//   .get(inputCtrl.index)
//
// app.route('/api/inputs/:input_id')
//
//   .get(inputCtrl.show)
//
//   .delete(inputCtrl.destroy)
