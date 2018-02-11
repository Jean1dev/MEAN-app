angular.module('primeiraApp').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('dashboard', {
        url: "/dashboard",
        templateUrl: "dashboard/dashboard.html"
        
      })
      .state('billingCycle', {
        url: "/billingCycles?page",
        templateUrl: "billingCycle/tabs.html"
      })
      .state('login', {
        url: '/login',
        templateUrl: 'login/login.html'
      })
      .state('grafico',{
        url: '/grafico',
        templateUrl: 'grafico/grafico.html'
      })
      $urlRouterProvider.otherwise('/dashboard')
  }])
  