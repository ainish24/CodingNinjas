const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') //CORS package
const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(express.static('public'))

/* -------------------------------- */
// # Without cors package
// const corsMiddleware = (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH')
//   res.header('Access-Control-Allow-Headers', '*')
//   next()
// }
// app.use(corsMiddleware)

/* -------------------------------- */
// # With cors package
// app.use(cors()) // All 3 headers are set to *
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Custom-Header'],
}))
/* -------------------------------- */

app.get('/', (req, res) => {
  res.send('Welcome to Server')
})

app.get('/users', (req, res) => {
  res.sendFile(__dirname + '/user.html')
})

app.listen(4000, () => {
  console.log('Server is up :)')
})


/*
  # CORS
    - Cross Origin Resource Sharing
    - By default browser policy which restricts sharing of resource between different domains
      - Access-Control-Allow-Origin: Specify which origin/domain can access the server
      - Access-Control-Allow-Methods: Specify which methods are allowed
      - Access-Control-Allow-Headers: Specify whether headers are allowed

    - Eg.:
      - x.com -> y.com
      - http://localhost:4000 -> http://localhost:3000

    - Resources:
      - https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
      - https://www.npmjs.com/package/cors

*/