let products=[
    {
        id:1,
        name:'Headphone',
        img_url:'https://m.media-amazon.com/images/I/41lArSiD5hL._UF1000,1000_QL80_.jpg'
    }
]

let productId=2

const getProducts=()=>{
    return products
}
const addProduct=(product)=>{
    const newProduct={
        id:productId,
        ...product
    }
    products.push(newProduct)
    productId++;
    return products
}
const updateProduct=(newProduct)=>{
    products=products.map((product)=>{
        if(product.id==newProduct.id){
            return {...newProduct}
        }else{
            return product
        }
    })
    return products
}
const deleteProduct=(id)=>{
    products=products.filter((product)=>{
        if(product.id==id){
            return false
        }else{
            return true
        }
    })
    return products
}

export default {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
}