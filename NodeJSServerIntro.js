//BoilerPlate for creating a server

const http= require('http')

const xyz=http.createServer((req,res)=>{
    res.end('NodeJs is interesting, but tricky!')
})

xyz.listen(3000)