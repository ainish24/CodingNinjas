const express = require('express')
const productCntrls = require('./product.controller')

const router = express.Router()

router.get('/', productCntrls.getAllProducts)
router.get('/search', productCntrls.getSearchedProducts)
router.post('/filter', productCntrls.getFilteredProducts)
router.get('/category/:category', productCntrls.getProductByCategory)
router.get('/:id', productCntrls.getProductById)
router.post('/:id/ratings', productCntrls.addProductRating)

module.exports = router