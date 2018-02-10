const db = require('../../config/mySQlCLiente')

var atualiza = ''
var indice = 1
var connection = db.dbLocal()

connection.query('CREATE TABLE IF NOT EXISTS VersaoBD (' +
    ' idVersaoBD INT NOT NULL AUTO_INCREMENT, ' +
    ' date DATE NULL, PRIMARY KEY (`idVersaoBD`))ENGINE = InnoDB;', function (err, res) {
        if (err) {
            console.log(err)
        } else {
            console.log('TABELA CRIADA')
            connection.query('SELECT idVersaoBD FROM VersaoBD ORDER BY idVersaoBD DESC LIMIT 1', function (err, res) {
                if (res[0] == undefined) {
                    console.log('PRIMEIRA VERSÃO')
                    incrementaVersao()
                } else {
                    indice = res[0].idVersaoBD
                    for (var i = 1; i < 9999; i++) {
                        try {
                            atualiza = eval('VERSAO_' + i)
                            incrementaVersao()
                            atualiza()
                        } catch (error) {
                            break
                        }
                    }
                }
            })
        }
    })

function incrementaVersao(param) {
    var obj = {}
    var date = new Date()
    date.getDate()
    //obj.idVersaoBD = param
    obj.date = date
    connection.query('INSERT INTO `VersaoBD` SET ?', obj)
}


//VERSÕES DE BANCO EM ORDER DECRESCENTE