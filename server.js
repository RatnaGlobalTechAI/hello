const http  = require('http')

const server = http.createServer((req, resp) => {
    if(req.url === '/') {
        resp.end("Welcome to the Ratna Global Technologies")
    }

    if(req.url === '/about') {
        resp.end('This is our history page for the day')
    }

    resp.end(
        `<h1>Welcome home</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back home</a>`
    )
})

server.listen(5000)