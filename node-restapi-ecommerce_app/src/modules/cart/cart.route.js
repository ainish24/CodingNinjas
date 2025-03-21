const express = require('express')
const cartCntrls = require('./cart.controller')

const router = express.Router()

router.get('/items', cartCntrls.getCartItems)
router.post('/add', cartCntrls.addCartItem)
router.post('/remove', cartCntrls.removeCartItem)

module.exports = router