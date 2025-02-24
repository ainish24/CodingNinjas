const bodyParser = require("body-parser")
const express= require("express")
const productController = require("./src/modules/product/product.controller.js")


const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.send("Welcome to ecommerce app!")
})
app.get("/api/products",productController.getAllProducts)
app.get("/api/products/search",productController.getSearchedProducts)
app.get("/api/products/filter",productController.getFilteredProducts)
app.get("/api/products/:id",productController.getProductById)
app.get("/api/category/:category",productController.getProductByCategory)

app.listen(3000,()=>{
    console.log("Server is up!")
})