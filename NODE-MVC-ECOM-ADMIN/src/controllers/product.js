const path =require('path')


const {getP,
    createP,
    updateP,
    deleteP}=require('../models/products')

const fetchProducts=(req, res)=>{
    const products = getP()
    res.json(products)
}
const createProduct=(req,res)=>{
    const {title,currentPrice,mrp,imgURL}=req.body
    newProduct={title,currentPrice,mrp,imgURL}
    createP(newProduct)
    res.redirect("/dashboard")
}
const displayDashboard=(req,res)=>{
    const products=getP()
    res.render('dashboard',{
        products:products,
        errorMessage:""
    })
}
const updateProduct=(req,res)=>{
    const {id}=req.params
    const {title, currentPrice, mrp, imgURL} = req.body
    const updatedProduct={title, currentPrice, mrp, imgURL}
    console.log(updatedProduct)
    updateP(Number(id), updatedProduct)
    res.redirect("/dashboard")
    // res.send('Product updated successffully!')
}
const deleteProduct=(req,res)=>{
    const {id}=req.params
    deleteP(Number(id))
    res.send("Product deleted successffully")
}

module.exports={
    displayDashboard,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct
}