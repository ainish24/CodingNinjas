const express = require('express')
const { connectDb } = require('./src/dbConfig/dbConfig.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const { Users } = require('./src/dbConfig/dbSchema.js')
const {authMiddleware} = require('./src/middleware/jwtAuth.js')

const app = express()
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', authMiddleware, (req, res) => {
    res.send('Hi')
})

app.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body
        const hashedPass = await bcrypt.hash(password, 10)
        const user = {
            username, password: hashedPass
        }
        await Users.create(user)
        res.status(201).json({
            status: 201,
            message: "Success",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Error on our end..."
        })
        console.log(error)
    }

})

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        const foundUser = await Users.findOne({ username })
        const didMatch = bcrypt.compare(password, foundUser.password)
        if (didMatch) {
            const token = jwt.sign({username, password}, "VERY_SECRET_KEY", { expiresIn: '30m' })
            res.cookie('token', token, { maxAge: 1000 * 60 * 30 })
            return res.status(200).json({
                status: 200,
                message: "Login Successfull"
            })
        } else {
            res.status(400).json({
                status: 400,
                message: "Login Unsuccessfull"
            })
        }
    } catch (error) {
        console.log("Error ", error)
        res.status(500).json({
            status: 500,
            message: "Error on our end..."
        })
    }
})

app.listen(3000, async () => {
    await connectDb()
    console.log('Server is up!')
})