const orderModel = require('./order.model');
const cartModel = require('../cart/cart.model');

const placeOrder = (req, res) => {
  const { cid } = req.headers
  const { paymentMethod } = req.body
  const cartItems = cartModel.getCartItems(cid)

  const newOrder = {
    customerId: Number(cid),
    products: cartItems.map(item => ({
      productId: item.productId,
      quantity: item.quantity
    })),
    paymentMethod,
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
  const { cid } = req.headers
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