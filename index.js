const express = require('express')
const app = express()
const products = require('./routers/products')
const port = process.env.PORT || 4001
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(products)
app.use(express.static('public'))

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`))