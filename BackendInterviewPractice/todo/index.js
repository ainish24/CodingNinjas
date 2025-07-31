import express from 'express'
import productController from './src/controllers/productController.js';

const app = express();

app.set('view engine', 'ejs')
app.set('views','src/views')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

app.get('/', productController.getPtoducts)
app.post('/', productController.addProduct)
app.patch('/:id', productController.editProduct)
app.delete('/:id', productController.deleteProduct)

app.listen(3000,()=>{
    console.log('Listening on port 3000')
})