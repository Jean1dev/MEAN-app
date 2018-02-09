const mongo = require('mongodb')

module.exports.connection = function(){
        console.log('Entrou na função de conexão');
        var db = new mongo.Db(
            'db_finance',
            new mongo.Server(
                'localhost', // string contendo o endereço do servidor
                27017, // porta de conexão
                {}
            ),
            {}
        );
    
        return db
}

module.exports.teste = function(){
    console.log('TUDO OK')
}