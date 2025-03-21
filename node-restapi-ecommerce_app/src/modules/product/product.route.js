const express = require('express')
const productCntrls = require('./product.controller')
const {isLoggedIn}=require('../../middlewares/auth.js')

const router = express.Router()

router.get('/', productCntrls.getAllProducts)
router.get('/search', productCntrls.getSearchedProducts)
router.post('/filter', productCntrls.getFilteredProducts)
router.get('/:id', productCntrls.getProductById)
router.post('/:id/ratings', isLoggedIn, productCntrls.addProductRating)
router.get('/category/:category', productCntrls.getProductByCategory)

module.exports = router