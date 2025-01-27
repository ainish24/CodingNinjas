const express = require('express')
const bodyParser=require('body-parser')
const ejs = require('ejs')
const {displayDashboard,
        fetchProducts,
        createProduct
}=require('./src/controllers/product.js')

const app = express()
app.use(express.static('public'))
app.set('views', __dirname+'/src/views')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('E-Commerce Admin Panel')
})

app.get('/dashboard',displayDashboard)

app.get('/products',fetchProducts)

app.post('/products',createProduct)


app.listen(3000,()=>{
    console.log('Server is up!')
})