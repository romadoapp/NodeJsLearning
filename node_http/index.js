
const http = require('http')
const fs = require('fs')
const path = require('path')

const hostName = 'localhost'
const port = 3000
const server = http.createServer((req, res) => {
    console.log("request for " + req.url + ' by method ' + req.method)

    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') fileUrl = '/index.html'
        else fileUrl = req.url

        var filePath = path.resolve('./public'+fileUrl)
        const fileExt = path.extname(filePath)
        if (fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404
                    res.setHeader('content-type', 'text/html')
                    res.end('<html><body><h1> Error 404</h1></body></html>')
                    return
                }
            })
        }

    }
    res.statusCode = 200
    res.setHeader('content-type', 'text/html')
    res.end('<html><body><h1>Hello, world</h1></body></html>')
})

server.listen(port, hostName, () => {
    console.log(`server running at http://${hostName}:${port}`)
})
