const express = require('express')
const bodyParser = require('body-parser')
const dotenv=require("dotenv")
const swaggerUi=require("swagger-ui-express")
const swaggerJSON=require('./documentation/swagger.json')
const cookieParser = require("cookie-parser")
const productRoutes = require('./src/modules/product/product.route')
const customerRoutes = require('./src/modules/customer/customer.route')
const cartRoutes = require('./src/modules/cart/cart.route')
const orderRoutes = require('./src/modules/order/order.route')

const app = express()
dotenv.config()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cookieParser())

app.use('/api/products', productRoutes)
app.use('/api/customers', customerRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/docs',swaggerUi.serve,swaggerUi.setup(swaggerJSON))

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to ECommerce App'
  })
})

app.get("/api/users",(req,res)=>{
  res.json([
    {
      name:'John Doe',
      email:'example@gmail.com',
      role:'Admin'
    },
    {
      name:'John Doe',
      email:'example@gmail.com',
      role:'User'
    }
  ])
})

app.get("*",(req,res)=>{
  res.status(404).send("Not Found!")
})

app.listen(3000, () => {
  console.log('Server is up :)')
})