const path = require('path')
const express = require('express')
// const http = require('http')
// const enforce = require('express-sslify')
var sslRedirect = require('heroku-ssl-redirect')

const app = express()
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000

//app.use(sslRedirect)
app.use(express.static(publicPath), sslRedirect)

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
  console.log('Server is up!')
})
