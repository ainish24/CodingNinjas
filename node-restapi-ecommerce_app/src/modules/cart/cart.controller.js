const cartModel = require('./cart.model');

const getCartItems = (req, res) => {
  const { cid } = req.headers
  const cartItems = cartModel.getCartItems(cid)
  res.json({
    status: 'SUCCESS',
    data: cartItems
  })
}

const addCartItem = (req, res) => {
  const { cid } = req.headers
  const { productId, quantity } = req.body
  cartModel.addToCart(cid, productId, quantity)
  res.json({
    status: 'SUCCESS',
    message: 'Product added to the cart'
  })
}

const removeCartItem = (req, res) => {
  const { cid } = req.headers
  const { productId } = req.body
  cartModel.removeFromCart(cid, productId)
  res.json({
    status: 'SUCCESS',
    message: 'Product removed from the cart'
  })
}

module.exports = {
  getCartItems,
  addCartItem,
  removeCartItem
}