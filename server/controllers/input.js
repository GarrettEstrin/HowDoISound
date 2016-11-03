var
  Input = require('../models/input.js')
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3')
var dotenv = require('dotenv').load({silent: true})

var tone_analyzer = new ToneAnalyzerV3({
    username: process.env.WATSON_USERNAME,
    password: process.env.WATSON_PASSWORD,
    version_date: '2016-05-19'
})


module.exports = {
  index,
  show,
  create,
  update,
  destroy,
}

function index (req, res) {
    Input.find({}, function(err, inputs) {
        if (err)
            res.send(err);
        else {
            res.json(inputs);
        }
    })
  }

    function show (req, res) {
        Input.findById(req.params.input_id, function(err, input) {
            if (err)
                res.send(err);
            res.json(input);
        })
    }

function create (req, res) {
  tone_analyzer.tone({
      text: req.body.textInput
  }, function(err, tone) {
      if (err)
          console.log(err);
      else {
          console.log(JSON.stringify(tone, null, 2));
          res.json(tone)
      }
  })

    // Input.create(req.body, function(err, data) {
    //     if (err)
    //         res.send(err);
    //
    //     res.json({
    //         message: "Well done.",
    //         data: data
    //     })
    // })
}

function update(req, res) {

}

function destroy(req, res) {
      Input.findByIdAndRemove(req.params.id, function(err) {
        if(err) return console.log(err)
        res.json({success: true, message: "Napalm, Fire, StonesBrim"})
      })
    };
