var
  express = require('express'),
  inputRouter = express.Router(),
  inputCtrl = require('../controllers/input.js')




//ROUTES FOR /API
inputRouter.route('/')

  .get(inputCtrl.index)

  .post(inputCtrl.create)

inputRouter.route('/inputs')

  .get(inputCtrl.index)

inputRouter.route('/inputs/:input_id')

  .get(inputCtrl.show)

  .delete(inputCtrl.destroy)

module.exports = inputRouter
