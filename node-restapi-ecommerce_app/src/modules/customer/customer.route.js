const express = require('express')
const customerCntrls = require('./customer.controller')

const router = express.Router()

router.post('/signup', customerCntrls.signup)
router.post('/login', customerCntrls.login)

module.exports = router