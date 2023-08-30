const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT || 1234
const path = require('path')
const clientPath = path.join(__dirname, './client/dist')
app.use('/', express.static(path.join(__dirname, './client/dist')))

app.use(express.json())

app.use('/api', require('./API/Users/Routers'))
app.use('/api', require('./API/Products/Routers'))
app.use('/api', require('./API/Category/Routers'))
app.use('/api', require('./API/Brands/Routers'))
app.use('/api', require('./API/Orders/Routers'))

app.get('*',(req, res)=>res.sendFile(path.join(__dirname, './client/dist/index.html')))

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})