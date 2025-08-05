const http = require('http')

let model = [

]
let id = 1

const server = http.createServer((req, res) => {
    const shredded = req.url.split('?')[0]
    const segments = shredded.split('/')
    if (req.method == 'POST' && req.url == '/products') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk
        })
        req.on('end', () => {
            const newData = JSON.parse(body)
            model.push({ id, ...newData })
            id++;
        })
        return res.end('Data Entered!')
    }
    if (req.method == 'GET' && req.url == '/products') {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        const data = {
            status: 200,
            data: model
        }
        return res.end(JSON.stringify(data))
    }
    if (req.method == 'GET' && segments[1] == 'products' && segments[2]) {
        const recId = segments[2]
        const foundData = model.filter((mod) => { if (mod.id == recId) return true })
        if (foundData.length >= 1) {
            res.writeHead(200, { "Content-Type": "application/json" })
            return res.end(JSON.stringify({
                status: 200,
                data: foundData
            }))
        }
        res.writeHead(400, { "Content-Type": "application/json" })
        return res.end(JSON.stringify({
            status: 400,
            message: "Not Found"
        }))
    }
    if (req.method == 'PUT' && segments[1] == 'products' && segments[2]) {
        const recId = Number(segments[2])
        let body = ''
        req.on('data', (chunks) => {
            body += chunks
        })
        req.on('end', () => {
            const parsedData = JSON.parse(body)
            let found = false
            model = model.map((data) => {
                if (data.id == recId) {
                    found = true
                    return ({ ...data, ...parsedData })
                }
                return data
            })
            res.setHeader("Content-Type", "application/json")
            if (found) {
                res.statusCode = 200
                return res.end(JSON.stringify({
                    status: 200,
                    message: "Data updated successfully"
                }))
            } else {
                res.statusCode = 404
                return res.end(JSON.stringify({
                    status: 404,
                    message: "Product not found"
                }))
            }
        })
        return
    }
    // if(req.method=='DELETE' && req.url=='/products/:id'){

    // }
    res.end('Error')
})

server.listen(3000, () => {
    console.log('Server is up!')
})