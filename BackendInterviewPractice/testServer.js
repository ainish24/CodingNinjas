require('dotenv').config()
const http = require('http')
const nodemailer=require('nodemailer')
const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.email,
        pass:process.env.pass
    }
})
const server = http.createServer((req, res) => {
    let body=''
    if(req.method==='POST'){
        req.on('data',(chunk)=>{
            body+=chunk
        })
        req.on('end',()=>{
            console.log('Data Received', JSON.parse(body).email)
            transporter.sendMail({
                from:'bakerbackend@gmail.com',
                to:JSON.parse(body).email,
                subject:'Test Email',
                text:'Hi there chammak challo, firse aagaya!'
            },(error, info)=>{
                if(error){
                    console.log('error sending mail')
                }else{
                    console.log('mail sent successfully', info.response)
                }
            })
            res.end('Data received')
        })
    }else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.end('Invalid Response')
    }
})
server.listen(3000,()=>{
    console.log('Listening on port 3000')
})