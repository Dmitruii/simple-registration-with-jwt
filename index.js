const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const {check} = require('express-validator')

const PORT = process.env.PORT || 5000
const DB_URL = 'mongodb+srv://DimaNaym:8S53baN4@cluster0.0jfyn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use('/auth', [
    check('username', 'Username cannot be empty').notEmpty(),
    check('password', 'Password must be more than 4 and less than 10 characters').isLength({min: 4, max: 10})
], authRouter)

app.get('/', (req, res) => {
    res.json('ok')
})

const start = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server was started in PORT: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()