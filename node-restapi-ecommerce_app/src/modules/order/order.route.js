const express = require('express')
const orderCntrls = require('./order.controller')
const {isLoggedIn}=require('../../middlewares/auth.js')

const router = express.Router()
router.use(isLoggedIn)

router.post('/place', orderCntrls.placeOrder)
router.get('/', orderCntrls.getOrders)
router.get('/:id', orderCntrls.getOrderById)

module.exports = router