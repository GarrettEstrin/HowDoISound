var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InputSchema = new Schema({
  input: String
})

module.exports = mongoose.model('Input', InputSchema);
