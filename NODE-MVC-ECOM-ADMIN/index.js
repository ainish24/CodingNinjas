const express = require('express')
const bodyParser=require('body-parser')
const ejs = require('ejs')
const {displayDashboard,
        fetchProducts,
        createProduct,
        updateProduct,
        deleteProduct
}=require('./src/controllers/product.js')
// const {validateProductMiddleware}=require('./src/middlewares/validateProduct.js')
const {body, validationResult} = require('express-validator')
const {validationRules} = require('./src/middlewares/validateProduct.js')
const app = express()

app.use(express.static('public'))
app.set('views', __dirname+'/src/views')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.get('/',(req,res)=>{
    res.send('E-Commerce Admin Panel')
})

app.get('/dashboard',displayDashboard)

app.get('/products',fetchProducts)

app.post('/products',validationRules,createProduct)

app.patch('/products/:id',updateProduct)

app.delete('/products/:id',deleteProduct)

app.listen(3000,()=>{
    console.log('Server is up!')
})