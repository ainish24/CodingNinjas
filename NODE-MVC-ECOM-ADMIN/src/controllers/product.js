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
    const newProduct=req.body
    createP(newProduct)
    res.send("Product added successfully!")
}
const displayDashboard=(req,res)=>{
    const products=getP()
    res.render('dashboard',{
        products:products
    })
}

module.exports={
    displayDashboard,
    fetchProducts,
    createProduct
}