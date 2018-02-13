(function(){
    angular.module('primeiraApp').controller('BillingCycleCtrl', [
        '$http',
        '$location',
        'msgs',
        'tabs',
        'consts',
        BillingCycleController
    ])

    function BillingCycleController($http, $location, messages, tabs, consts){
        const obj = this
        //const url = 'http://localhost:3003/api/billingCycles'
        const url = consts.apiUrl + '/billingCycles'

        obj.refresh = function(){
            const page = parseInt($location.search().page) || 1
            $http.get(`${url}/?skip=${(page - 1) * 10}&limit=10`).then(function(response){
                obj.billingCycle = { credits: [{}], debts: [{}] }
                obj.billingCycles = response.data
                obj.calculateValues()

                $http.get(`${url}/count`).then(function(response){
                    obj.pages = Math.ceil(response.data.value / 10)
                    console.log('pages = ', obj.pages)
                    tabs.show(obj, {tabList: true, tabCreate: true})
                })
            })
        }

        obj.create = function(){
            obj.billingCycle.user = JSON.parse(localStorage._chave_).email
            
            $http.post(url, obj.billingCycle).then(function(response){
                obj.refresh()
                messages.addSuccess('Operação salva no banco de dados')
            }).catch(function(response){
                messages.addError(response.data.errors)
            })
        }

        obj.showTabUpdate = function(billingCycle){
            obj.billingCycle = billingCycle
            tabs.show(obj, {tabUpdate: true})
            obj.calculateValues()
        }

        obj.showTabDelete = function(billingCycle){
            obj.billingCycle = billingCycle
            tabs.show(obj, {tabDelete: true})
            obj.calculateValues()
        }

        obj.delete = function(){
            var __url__ = `${url}/${obj.billingCycle._id}`
            $http.delete(__url__, obj.billingCycle).then(function(response){
                obj.refresh()
                messages.addSuccess('Registro removido')
            }).catch(function(err){
                messages.addError(err.data.errors)
            })
        }

        obj.update = function(){
            var __url__ = `${url}/${obj.billingCycle._id}`
            $http.put(__url__, obj.billingCycle).then(function(response){
                obj.refresh()
                messages.addSuccess('Registro alterado')
            }).catch(function(err){
                messages.addError(err.data.errors)
            })
        }

        obj.addCredit = function(index){
            obj.billingCycle.credits.splice(index + 1, 0, {})
            obj.calculateValues()
        }

        obj.addDebt = function(index){
            obj.billingCycle.debts.splice(index + 1, 0, {})
            obj.calculateValues()
        }

        obj.cloneCredit = function(index, {name, value}){
            obj.billingCycle.credits.splice(index + 1, 0, {name, value})
            obj.calculateValues()
        }

        obj.cloneDebt = function(index, {name, value, status}){
            obj.billingCycle.debts.splice(index + 1, 0, {name, value, status})
            obj.calculateValues()
        }

        obj.deleteCredit = function(index){
            if(obj.billingCycle.credits.length > 1){
                obj.billingCycle.credits.splice(index, 1)
            }
            obj.calculateValues()
        }

        obj.deleteDebt = function(index){
            if(obj.billingCycle.debts.length > 1){
                obj.billingCycle.debts.splice(index, 1)
            }
            obj.calculateValues()
        }

        obj.calculateValues = function(){
            obj.credit = 0
            obj.debt = 0

            if(obj.billingCycle){
                obj.billingCycle.credits.forEach(function({value}){
                    obj.credit += !value || isNaN(value) ? 0 : parseFloat(value)
                })

                obj.billingCycle.debts.forEach(function({value}){
                    obj.debt += !value || isNaN(value) ? 0 : parseFloat(value)
                })
            }

            obj.total = obj.credit - obj.debt
        }

        obj.refresh()
    }
})()