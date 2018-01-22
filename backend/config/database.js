const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost:27017/db_finance')

mongoose.Error.messages.general.required = 'O atributo  é necessario'