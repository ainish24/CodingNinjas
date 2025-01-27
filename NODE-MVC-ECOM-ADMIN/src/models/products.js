let productId=2

let products=[
    {
        id: 1,
        title: "soundcore by Anker Q20i Wireless Bluetooth Over-Ear Headphones",
        currentPrice:4499,
        mrp:9598,
        imgURL:"https://m.media-amazon.com/images/I/610NdWdTLiL._SL1500_.jpg"
    }
]

const getP=()=>{
    return products
}

const createP =(newProduct)=>{
    products.push({id: productId, ...newProduct})
    productId++
}

const updateP =(id, updatedProduct)=>{
   products= products.map((product)=>{
        if(product.id!==id){
            return product
        }else{
            return {id, ...updatedProduct}
        }
    })
}

const deleteP =(id)=>{
    products= products.filter((product)=>{
        if(product.id==id){
            return false
        }else{
            return true
        }
    })
}




module.exports={
    getP,
    createP,
    updateP,
    deleteP
}