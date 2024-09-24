document.addEventListener("keydown",(event)=>{
    let audioElement = document.createElement("audio")
    if(event.key=='w'){
        audioElement.src="https://files.codingninjas.in/tom-1-28537.mp3"
        audioElement.play()
    }

    if(event.key=='a'){
        audioElement.src="https://files.codingninjas.in/tom-2-28541.mp3"
        audioElement.play()
    }

    if(event.key=='s'){
        audioElement.src="https://files.codingninjas.in/tom-3-28542.mp3"
        audioElement.play()
    }

    if(event.key=='d'){
        audioElement.src="https://files.codingninjas.in/tom-4-28543.mp3"
        audioElement.play()
    }

    if(event.key=='j'){
        audioElement.src="https://files.codingninjas.in/snare-28545.mp3"
        audioElement.play()
    }

    if(event.key=='k'){
        audioElement.src="https://files.codingninjas.in/crash-28546.mp3"
        audioElement.play()
    }

    if(event.key=='l'){
        audioElement.src="https://files.codingninjas.in/kick-bass-28547.mp3"
        audioElement.play()
    }
})


const wKey = document.getElementsByClassName("w")
const aKey = document.getElementsByClassName("a")
const sKey = document.getElementsByClassName("s")
const dKey = document.getElementsByClassName("d")
const jKey = document.getElementsByClassName("j")
const kKey = document.getElementsByClassName("k")
const lKey = document.getElementsByClassName("l")


wKey[0].addEventListener("click",()=>{
    let audioElement = document.createElement("audio")
    audioElement.src="https://files.codingninjas.in/tom-1-28537.mp3"
    audioElement.play()
})

aKey[0].addEventListener("click",()=>{
    let audioElement = document.createElement("audio")
    audioElement.src="https://files.codingninjas.in/tom-2-28541.mp3"
    audioElement.play()
})

sKey[0].addEventListener("click",()=>{
    let audioElement = document.createElement("audio")
    audioElement.src="https://files.codingninjas.in/tom-3-28542.mp3"
    audioElement.play()
})

dKey[0].addEventListener("click",()=>{
    let audioElement = document.createElement("audio")
    audioElement.src="https://files.codingninjas.in/tom-4-28543.mp3"
    audioElement.play()
})

jKey[0].addEventListener("click",()=>{
    let audioElement = document.createElement("audio")
    audioElement.src="https://files.codingninjas.in/snare-28545.mp3"
    audioElement.play()
})

kKey[0].addEventListener("click",()=>{
    let audioElement = document.createElement("audio")
    audioElement.src="https://files.codingninjas.in/crash-28546.mp3"
    audioElement.play()
})

lKey[0].addEventListener("click",()=>{
    let audioElement = document.createElement("audio")
    audioElement.src="https://files.codingninjas.in/kick-bass-28547.mp3"
    audioElement.play()
})