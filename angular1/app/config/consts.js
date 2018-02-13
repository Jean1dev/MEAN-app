angular.module('primeiraApp').constant('consts', {
    appName: 'Simples finanças',
    version: '1.0',
    owner: 'Jean',
    year: '2017',
    site: 'null',
    apiUrl: 'http://localhost:3003/api',
    oapiUrl: 'http://localhost:3003/oapi',
    userKey: '_chave_'
  }).run(['$rootScope', 'consts', function($rootScope, consts) {
    $rootScope.consts = consts
  }])