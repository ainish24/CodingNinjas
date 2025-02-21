import nodemailer from "nodemailer"
import path from "path"
import ejs from "ejs"
import dotenv from "dotenv"
dotenv.config()
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const isLoggedIn=(req,res,next)=>{
    if(!req.session.user){
        const user={name:"Recruiters"}
        const errMsg="only recruiter is allowed to access this page, login as recruiter to continue"
        return res.render('errorPage',{...user, isExist:false,errMsg})
    }
    next()
}

const tranporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.Nodemailer_Email,
        pass:process.env.Nodemailer_Password
    }
})
const templatePath=path.join(__dirname,"..","views","mail.ejs")
const mailerFunction=(recEmail,data)=>{
    ejs.renderFile(templatePath,data,(error,personalizedHtml)=>{
        if(error){
            console.log("Error rendering template: " , error)
            return
        }
        const mailOptions={
            from:process.env.Nodemailer_Email,
            to:recEmail,
            subject:"Job Application Received",
            html:personalizedHtml
        }
        tranporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log("Error sending email:" ,error)
            }else{
                console.log("Email sent successfully:", info.response)
            }
        })
    })
    
}

export {mailerFunction}