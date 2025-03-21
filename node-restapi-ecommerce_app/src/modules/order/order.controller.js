const orderModel = require('./order.model');
const cartModel = require('../cart/cart.model');
const productModel = require('../product/product.model.js')

const placeOrder = (req, res) => {
  const cid = req.user.id
  const { paymentMethod } = req.body
  const cartItems = cartModel.getCartItems(cid)

  if(!paymentMethod){
    return res.status(400).json({
      status:'FAILED',
      message:'Payment method missing. Please specify your payment method.'
    })
  }
  if(cartItems.length==0){
    return res.status(400).json({
      status:'FAILED',
      message:'Cart is empty. Please add items to your cart to place an order.'
    })
  }

  let totalAmount=0
  cartItems.forEach((cartItem)=>{
    const productPrice=productModel.getProductPrice(cartItem.productId)
    totalAmount+=productPrice*cartItem.quantity
  })


  const newOrder = {
    customerId: Number(cid),
    products: cartItems.map(item => ({
      productId: productModel.getProductName(item.productId),
      quantity: item.quantity
    })),
    paymentMethod,
    totalAmount:totalAmount.toFixed(2),
    time: new Date().toLocaleString()
  }

  orderModel.addOrder(newOrder)
  cartModel.emptyCart(cid)
  
  res.json({
    status: 'SUCCESS',
    data: newOrder
  })
}

const getOrders = (req, res) => {
  const cid = req.user.id
  const orders = orderModel.getOrders(cid)
  res.json({
    status: 'SUCCESS',
    data: orders
  })
}

const getOrderById = (req, res) => {
  const { id } = req.params
  const orders = orderModel.getOrderById(id)
  res.json({
    status: 'SUCCESS',
    data: orders
  })
}

module.exports = {
  placeOrder,
  getOrders,
  getOrderById,
}