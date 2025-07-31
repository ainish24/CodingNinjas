import productsModel from "../modules/productModel.js"

const getPtoducts = (req, res) => {
    const products = productsModel.getProducts()
    res.render('productView', { products: products, errMsg: false })
}

const addProduct = (req, res) => {
    const body = req.body
    productsModel.addProduct(body)
    res.redirect('/')
}

const editProduct=(req,res)=>{
    const newProduct=req.body
    productsModel.updateProduct(newProduct)
    res.redirect('/')
}

const deleteProduct=(req,res)=>{
    const id=req.params.id
    const products=productsModel.deleteProduct(id)
    res.render('productView', { products: products, errMsg: false })
}


export default { getPtoducts, addProduct, editProduct, deleteProduct }