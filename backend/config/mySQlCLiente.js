const mysql = require('mysql')

module.exports.dbProducao = function () {
    return DBconnection = mysql.createConnection({
        host: 'mysql857.umbler.com',
        user: 'user_test_bd',
        password: 'obscure1',
        database: 'neura_bd_teste',
        port: '41890'
    });
}

module.exports.dbLocal = function () {
    return DBconnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test',
        port: '3306'
    });
}