const customerModel = require('./customer.model');

const signup = (req, res) => {
  const { name, email, password } = req.body
  const newCustomer = { name, email, password }
  customerModel.addCustomer(newCustomer)
  res.send({
    status: 'SUCCESS',
    message: 'Customer signed up successfully'
  })
}

const login = (req, res) => {
  const { email, password } = req.body
  const user = customerModel.findCustomerExists(email, password)

  if(user.error) {
    return res.status(401).json({
      status: 'FAILED',
      message: 'Invalid email or password'
    })
  }

  res.json({
    status: 'SUCCESS',
    message: 'Customer logged in successfully'
  })
}

module.exports = {
  signup,
  login
}