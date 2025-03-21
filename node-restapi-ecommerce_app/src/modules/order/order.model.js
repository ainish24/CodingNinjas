let ORDERS = [
  {
    id: 1,
    customerId: 1,
    products: [
      {
        productId: 3,
        quantity: 2
      },
      {
        productId: 8,
        quantity: 1
      }
    ],
    paymentMethod: 'CreditCard',
    time: '12/01/2024, 05:30:32 PM'
  },
  {
    id: 2,
    customerId: 1,
    products: [
      {
        productId: 5,
        quantity: 3
      }
    ],
    paymentMethod: 'UPI',
    time: '11/26/2024, 02:15:10 PM'
  },
]

const addOrder = (newOrder) => {
  ORDERS.push({
    id: ORDERS.length + 1,
    ...newOrder
  })
}

const getOrders = (customerId) => {
  return ORDERS.filter(order => order.customerId === Number(customerId))
}

const getOrderById = (orderId) => {
  return ORDERS.find(order => order.id === Number(orderId))
}

module.exports = {
  addOrder,
  getOrders,
  getOrderById
}