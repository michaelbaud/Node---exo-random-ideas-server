const express = require('express')
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const ideasRouter = require('./routes/ideas')

const PORT = process.env.PORT || 5000
const app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use('/api', ideasRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})

