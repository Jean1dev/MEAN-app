const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost:27017/db_finance')

mongoose.Error.messages.general.required = 'O atributo  é necessario'
mongoose.Error.messages.Number.min = 'O valor inserido não é permitido'
mongoose.Error.messages.Number.max = 'O valor inserido não é permitido'
mongoose.Error.messages.String.enum = 'Valor invalido'