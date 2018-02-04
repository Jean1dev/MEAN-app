const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: {type: String, require: [true, 'informe a senha']},
    username: {type: String, require: true},
    email: {type: String, require: true},
    phone: {type: String, require: true}
})

module.exports = restful.model('User', userSchema)