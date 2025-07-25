const username= document.getElementById("name")
const email= document.getElementById("email")
const phone= document.getElementById("phone")
const password= document.getElementById("password")
const submitBtn= document.getElementById("submitBtn")
const targetDiv=document.getElementById("displayVal")

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    const nameVal=username.value
    const emailVal=email.value
    const phoneVal=phone.value
    const passVal=password.value
    let emailValidation= true
    let phoneValidation= true
    if(!emailVal.includes('@')){
        emailValidation=false
    }
    if(phoneVal.length!==10){
        phoneValidation=false
    }
    if(nameVal==="" || emailVal==="" || phoneVal==="" || passVal===""){
        alert('All fields are required')
    }else if(!emailValidation){
        alert('Enter valid Email Address')
    }
    else if(!phoneValidation){
        alert('Enter valid Phone Number')
    }
    else{
        const nameEl=document.createElement("div")
        const emailEl=document.createElement("div")
        const phoneEl=document.createElement("div")
        const passEl=document.createElement("div")
        nameEl.innerHTML=nameVal
        emailEl.innerHTML=emailVal
        phoneEl.innerHTML=phoneVal
        passEl.innerHTML=passVal
        targetDiv.append(nameEl, emailEl, phoneEl, passEl)
    }
})