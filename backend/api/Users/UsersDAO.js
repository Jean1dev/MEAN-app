let mongo = require('../../config/mongoClient')

module.exports.insert = function(obj, response){
   var db = mongo.connection()
   //console.log(eval(db.open()))
    db.open(function(err, mongoClient){
        if(err){
            response.send('ERRO DE CONEXÃO')
        }
        mongoClient.collection('users', function(err, res){
            res.insert(obj)
            response.send('ok')
        })
        mongoClient.close()
    })
}

module.exports.get = function(){

}