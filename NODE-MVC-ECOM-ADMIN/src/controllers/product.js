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
    const products = getP()
    const {title,currentPrice,mrp,imgURL}=req.body

    //Validation Rules
    const errors=[]

    if(title=='' || title.length<3){
        errors.push("Invalid title entered")
    }

    if(currentPrice=='' || isNaN(Number(currentPrice))){
        errors.push("Invalid current price entered")
    }

    if(mrp=='' || isNaN(Number(mrp))){
        errors.push("Invalid MRP entered")
    }

    try{
        const url1 = new URL(imgURL)
    }catch(error){
        errors.push("Invalid image URL entered")
    }

    if(errors.length!=0){
        res.render('dashboard',{products, errorMessage:errors[0]})
    }

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