const mongoose = require('mongoose')
const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost:27017/db_finance'

module.exports = mongoose.connect(url, {useMongoClient: true})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."
/*mongoose.Error.messages.general.required = 'O atributo  é necessario'
mongoose.Error.messages.Number.min = 'O valor inserido não é permitido'
mongoose.Error.messages.Number.max = 'O valor inserido não é permitido'
mongoose.Error.messages.String.enum = 'Valor invalido'*/