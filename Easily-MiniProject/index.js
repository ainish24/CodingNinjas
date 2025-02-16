import express from "express"
import * as jobControllers from "./src/controllers/jobController.js"

const app = express()

app.set("view engine","ejs")
app.use(express.static('public'))
app.set("views",'./src/views')

app.get("/", jobControllers.onRender)

app.listen(3000,()=>{
    console.log("Server is Up!")
})