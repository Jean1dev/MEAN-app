(function(){
    angular.module('primeiraApp').controller('DashboardCtrl', [
        '$http',
        'consts',
        DashboardController
    ])
    
    function DashboardController($http, consts){
        const obj = this
    
        obj.getSummary = function(){
            //const url = 'http://localhost:3003/api/billingSummary'
            const url = consts.apiUrl + '/billingSummary'

            $http.get(url).then(function(response){
                const {credit = 0, debt = 0} = response.data
                //var data = response.data
                obj.credit = credit
                obj.debt = debt
                obj.total = credit - debt
            })
        }
    
        obj.getSummary()
    }   
})()
