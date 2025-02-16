document.getElementById("register-button").addEventListener("click",()=>{
    document.getElementById("popup-form").style.display="flex"
})

document.getElementsByClassName("close")[0].addEventListener("click",()=>{
    document.getElementById("popup-form").style.display="none"
})