const http=require('http')

const server=http.createServer((req,res)=>{
    res.end('NodeJs!')
})

server.listen(3000)