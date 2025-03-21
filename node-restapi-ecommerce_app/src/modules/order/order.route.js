const express = require('express')
const orderCntrls = require('./order.controller')

const router = express.Router()

router.post('/place', orderCntrls.placeOrder)
router.get('/', orderCntrls.getOrders)
router.get('/:id', orderCntrls.getOrderById)

module.exports = router