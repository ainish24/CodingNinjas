const CUSTOMERS = [
  {
    id: 1,
    name: 'Alice',
    email: 'alice@gmail.com',
    password: '123'
  },
  {
    id: 2,
    name: 'Bob',
    email: 'bob@gmail.com',
    password: '456'
  }
]

const addCustomer = (newCustomer) => {
  CUSTOMERS.push({
    userId: CUSTOMERS.length + 1,
    ...newCustomer
  })
}

const findCustomerExists = (email, password) => {
  const user = CUSTOMERS.find(user => user.email === email && user.password === password)
  if(user) {
    return user
  } else {
    return {
      error: true,
      message: 'User not found'
    }
  }
}

module.exports = {
  addCustomer,
  findCustomerExists
}