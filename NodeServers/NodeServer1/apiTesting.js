const http=require('http')
const fs=require('fs')
const qs=require('qs')
let users=[]
const server=http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){
        return res.end()
    }
    if(req.method=='GET' && req.url=='/register'){
        fs.readFile('index.html',(error, data)=>{
            if(error){
                console.log("Error reading file: ", error)
                return
            }
            res.end(data)
        })
    }
    else if(req.method=='GET' && req.url=='/users'){
        res.end(JSON.stringify(users))
    }else if(req.method=='POST' && req.url=='/users'){
        let newUser=''
        req.on('data',(chunk)=>{
            newUser+=chunk;
        })

        req.on('end',()=>{
            const newUserJSON=qs.parse(newUser)
            users.push(newUserJSON)
        })

        req.on('error',()=>{
            console.log('Some error occured')
        })
        res.end('New user Created!')
    }else{
        res.end("Fetching Users!")
    }
})

server.listen(3000)