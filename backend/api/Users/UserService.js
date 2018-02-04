const _ = require('lodash')
const crypto = require('crypto')
const user = require('./Users')
const __DAO__ = require('./UsersDAO')

user.methods(['get', 'put', 'delete', 'post'])
user.updateOptions({new : true, runValidators: true})

user.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next){
  const bundle = res.locals.bundle

  if(bundle.errors){
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  }else{
    next()
  }
}

function parseErrors(nodeRestFulErrors){
    const errors = []
    _.forIn(nodeRestFulErrors, error => errors.push(error.message))
    return errors
  }

user.route('post', function(req, res){
  var dadosReceiv = req.body
  var senha_crypto = crypto.createHash('md5').update(dadosReceiv.password).digest('hex')
  dadosReceiv.password = senha_crypto
  __DAO__.insert(dadosReceiv)
})

  module.exports = user