const express = require('express')
const auth = require('./auth')

module.exports = function (server) {

  // Rotas abertas
  const openApi = express.Router()
  server.use('/oapi', openApi)
  const AuthService = require('../api/Users/authService')
  openApi.post('/login', AuthService.login)
  openApi.post('/signup', AuthService.signup)
  openApi.post('/validateToken', AuthService.validateToken)

  // Rotas protegidas por Token JWT

  const protectedApi = express.Router()
  server.use('/api', protectedApi)
  protectedApi.use(auth)

  // API Routes PUBLIC - em caso de der pau em tudo
  // const router = express.Router()
  // server.use('/api', router)

  // rotas da API
  const billingCycleService = require('../api/billingcycle/billingCycleService')
  // billingCycleService.register(router, '/billingCycles') USAR SE FOR PUBLIC
  billingCycleService.register(protectedApi, '/billingCycles')


  const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  //router.route('/billingSummary').get(billingSummaryService.getSummary) USAR SE FOR PUBLIC
  protectedApi.route('/billingSummary').get(billingSummaryService.getSummary)

  // Rotas do usuario usando outra api
  //const UserService = require('../api/Users/UserService')
  //UserService.register(router, '/users')

}
