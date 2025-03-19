const bodyParser = require("body-parser")
const express= require("express")
const productRoutes = require('./src/modules/product/product.route')


const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/api/products', productRoutes)

app.get("/",(req,res)=>{
    res.send("Welcome to ecommerce app!")
})

app.listen(3000,()=>{
    console.log("Server is up!")
})