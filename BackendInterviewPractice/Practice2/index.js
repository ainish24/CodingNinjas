const http = require ('http')

const server = http.createServer((req,res)=>{
    const start = process.hrtime()
    res.on('finish',()=>{
        const diff = process.hrtime(start)
        const calculatedTime=diff[0]*1000 + diff[1]/1e6
        const date=new Date(Date.now())
        console.log(
            `{
                Method: ${req.method},
                URL: ${req.url},
                Timestamp: ${date.toLocaleString()},
                Duration: ${calculatedTime}ms
}`
            )
    })
    res.end('Response sent back')
})

server.listen(3000,()=>{
    console.log('Server is up!')
})