(function(){
    angular.module('primeiraApp').factory('msgs', [
        'toastr',
        MsgFactory
    ])

    function MsgFactory(toastr){
        function addMsg(message, title, method){
            if(message instanceof Array){
                message.forEach(msg => toastr[method](msg, title))
            }else{
                toastr[method](message, title)
            }
        }

        function addSuccess(message){
            addMsg(message, 'Sucesso', 'success')
        }

        function addError(message){
            addMsg(message, 'Erro', 'error')
        }

        return { addSuccess, addError } 
    }
})()