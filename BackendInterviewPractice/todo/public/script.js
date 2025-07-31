const form = document.getElementById('aeForm')

let disForm = false

const toggleForm = () => {
    if (!disForm) {
        form.classList.remove('hidden')
        disForm = true
    } else {
        form.classList.add('hidden')
        disForm = false
    }
}
let productId

const submitForm = (action, method) => {
    if(method=='patch'){
        const url=`/${productId}`
        const name = document.getElementById('productName').value
        const img_url=document.getElementById('imgUrl').value
        try {
            axios.patch(url,{
                id:productId,
                name,
                img_url
            })
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }else{
        form.action = action
        form.method = method
        form.submit()
    }
}


const editProduct = (products) => {
    toggleForm()
    const product = JSON.parse(products)
    const nameField = document.getElementById('productName')
    const imageField = document.getElementById('imgUrl')
    nameField.value = product.name
    imageField.value = product.img_url
    productId = product.id
    if (!disForm) {
        nameField.value = ''
        imageField.value = ''
    }
}

const deleteProduct=async (productId)=>{
    try {
        const url=`/${productId}`
        console.log(url)
        await axios.delete(url)
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
}