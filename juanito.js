const http = require('http')
const url = require('url')
const fs = require('fs')

http
.createServer((req, res) => {

    console.log('Dentro del servicio')
    res.end()
})
    

.listen(6000,() => {
    console.log('Servicio http://localhost:6000')
}   )