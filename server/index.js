'use strict'

const express = require('express')
const fs = require('fs')
const https = require('https')
const path = require('path')

const app = express()
const directoryToServe = 'client'
const port = 443

app.use('/', express.static(path.join(__dirname, '..', directoryToServe)))

const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, 'ssl', '5773083_www.xn--elt384g.xn--3ds443g.pem')),
  key: fs.readFileSync(path.join(__dirname, 'ssl', '5773083_www.xn--elt384g.xn--3ds443g.key'))
}

https.createServer(httpsOptions, app)
  .listen(port, function () {
    console.log(`Serving the ${directoryToServe}/ directory at https://localhost:${port}`)
  })
