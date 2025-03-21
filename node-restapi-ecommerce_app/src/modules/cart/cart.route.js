const express = require('express')
const cartCntrls = require('./cart.controller')
const {isLoggedIn}=require('../../middlewares/auth.js')

const router = express.Router()
router.use(isLoggedIn)

router.get('/items', cartCntrls.getCartItems)
router.post('/add', cartCntrls.addCartItem)
router.post('/remove', cartCntrls.removeCartItem)

module.exports = router