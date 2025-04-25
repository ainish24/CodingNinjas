let songsArray=[
    {   id: 1,
        name:"Winning Speech",
        artist:"Karan Aujla",
        genre:"Rap",
        source:"./songAudio/Winning Speech - Karan Aujla.mp3",
        img:"./songAlbum/Winning-Speech-Img.jpeg"
    },
    {   id: 2,
        name:"Millionaire",
        artist:"Honey Singh",
        genre:"Rap",
        source:"./songAudio/Millionaire - Yo Yo Honey Singh.mp3",
        img:"./songAlbum/Millionaire-Img.jpeg"
    },
    {   id: 3,
        name:"G.O.A.T",
        artist:"Diljit Dosanjh",
        genre:"Rock",
        source:"./songAudio/G.O.A.T - Diljit Dosanjh.mp3",
        img:"./songAlbum/GOAT-Img.jpeg"
    },
    {   id: 4,
        name:"Bandana",
        artist:"Shubh",
        genre:"Rock",
        source:"./songAudio/Bandana - Shubh.mp3",
        img:"./songAlbum/Bandana-Img.jpeg"
    },
    {   id: 5,
        name:"Antidote",
        artist:"Karan Aujla",
        genre:"Hip-Hop",
        source:"./songAudio/ANTIDOTE - Karan Aujla.mp3",
        img:"./songAlbum/Antidote-Img.jpeg"
    },
    {   id: 6,
        name:"8 Asle",
        artist:"Sukha",
        genre:"Hip-Hop",
        source:"./songAudio/8 ASLE - Sukha (DJJOhAL.Com).mp3",
        img:"./songAlbum/8-Asle-Img.jpeg"
    },
    {   id: 7,
        name:"4 Yaar",
        artist:"Parmish Verma",
        genre:"Hip-Hop",
        source:"./songAudio/4 Yaar - Parmish Verma.mp3",
        img:"./songAlbum/4-Yaar-img.jpeg"
    },
    {   id: 8,
        name:"Legend",
        artist:"Sidhu Moosewala",
        genre:"Hip-Hop",
        source:"./songAudio/Legend - Sidhu Moose Wala.mp3",
        img:"./songAlbum/Legend-Song-Img.jpeg"
    },
    {   id: 9,
        name:"Get Up Jawani",
        artist:"Honey Singh",
        genre:"Rap",
        source:"./songAudio/Get Up Jawani - Yo Yo Honey Singh.mp3",
        img:"./songAlbum/Get-Up-Jawani-Img.jpeg"
    },
    {   id: 10,
        name:"5 Taara",
        artist:"Diljit Dosanjh",
        genre:"Rock",
        source:"./songAudio/5 Taara.mp3",
        img:"./songAlbum/5-Taara-Img.jpg"
    }

]
const uniqueGenres = Array.from(new Set(songsArray.map(song=>song.genre)))
console.log(uniqueGenres)
const dropDown=document.getElementById("genre")
uniqueGenres.forEach((genre)=>{
    const options = document.createElement("option")
    options.setAttribute("value",genre)
    options.innerText=genre
    dropDown.appendChild(options)
})

function showSongs(){
    const selectedGenre=dropDown.value;
    const filteredId=songsArray.filter((song)=>{
        return song.genre==selectedGenre
    }).map((song)=>{
        return song.id
    })
    let finalIds
    let genreName
    if(filteredId.length > 0){
        finalIds=filteredId
        genreName=selectedGenre
    }
    else{
        finalIds=songsArray.map((song) => song.id);
        genreName="All Songs"
    }
    const genName=document.getElementsByClassName("genreName")[0]
    genName.innerText=genreName
    const songsNameContainer=document.getElementsByClassName("songsName")[0]
    songsNameContainer.innerText=""
    finalIds.forEach((id)=>{
        const songDiv=document.createElement("div")
        const songName=songsArray.filter((song)=>{
            return song.id==id
        })[0].name
        const artistName=songsArray.filter((song)=>{
            return song.id==id
        })[0].artist
        songDiv.setAttribute("class","songName")
        songDiv.setAttribute("onclick","renderCurrentSong(event)")
        songDiv.innerText=`${songName} - ${artistName}`
        songsNameContainer.appendChild(songDiv)
    })
}
showSongs();
let clickedSongObject
const albumImage=document.getElementsByClassName("albumImageAttribute")[0]
const currentSonngName=document.getElementsByClassName("currentSongName")[0]
const artistName=document.getElementsByClassName("artistName")[0]
const audioSource=document.getElementsByClassName("audioSource")[0]
const audioElement=document.getElementsByClassName("audioElement")[0]


function renderCurrentSong(event){
    const clickedDiv=event.target;
    const clickedString=clickedDiv.innerText
    const clickedSongName=clickedString.split("-")[0].trim()
    clickedSongObject=songsArray.filter((song)=>{
        return song.name==clickedSongName
    })[0]
    albumImage.src=clickedSongObject.img
    currentSonngName.innerText=clickedSongObject.name
    artistName.innerText=clickedSongObject.artist
    audioSource.setAttribute("src",clickedSongObject.source)
    audioElement.load()
}

function prevSong(){
    if (clickedSongObject.id != 1){
        clickedSongObject=songsArray[clickedSongObject.id-2]
    }
    albumImage.src=clickedSongObject.img
    currentSonngName.innerText=clickedSongObject.name
    artistName.innerText=clickedSongObject.artist
    audioSource.setAttribute("src",clickedSongObject.source)
    audioElement.load()
}
function nextSong(){
    if (clickedSongObject.id != 10){
        clickedSongObject=songsArray[clickedSongObject.id]
    }
    albumImage.src=clickedSongObject.img
    currentSonngName.innerText=clickedSongObject.name
    artistName.innerText=clickedSongObject.artist
    audioSource.setAttribute("src",clickedSongObject.source)
    audioElement.load()
}

const inputtedPlaylistNameTag = document.getElementsByClassName("playlistNameInput")[0]
let objectOfPlaylists={}
let allPlaylistDiv=document.getElementsByClassName("innerAllPlaylistDiv")[0]

function createPlaylist(){
    objectOfPlaylists[inputtedPlaylistNameTag.value.trim()]=[]
    playlistName=inputtedPlaylistNameTag.value.trim()
    const newPlaylist=document.createElement("div")
    newPlaylist.innerText=playlistName
    newPlaylist.className="playlistInnerDiv"
    newPlaylist.setAttribute("onclick","currentPlaylist(event); renderPlaylistSong();")
    allPlaylistDiv.appendChild(newPlaylist)
    inputtedPlaylistNameTag.value =""
}

let clickedPlaylist=null
const innerCurrentPlaylistDiv = document.getElementsByClassName("innerCurrentPlaylistDiv")[0]

function currentPlaylist(event){
    clickedPlaylist=event.target.innerText
}

function addToPlaylist(){
    let isPresent=false
    if(clickedPlaylist==null){
        alert("Select a playlist by clicking on it!")
    }
    objectOfPlaylists[clickedPlaylist].forEach(song => {
        if(song.id==clickedSongObject.id){
            isPresent=true
        }
    });
    if(!isPresent){
        objectOfPlaylists[clickedPlaylist].push(clickedSongObject)
    }
    renderPlaylistSong()
}
function removeFromPlaylist(){
    let isPresent=false
    let songIndex
    objectOfPlaylists[clickedPlaylist].forEach((song, index) => {
        if(song.id==clickedSongObject.id){
            isPresent=true
            songIndex=index
        }
    });
    if(isPresent){
        objectOfPlaylists[clickedPlaylist].splice(songIndex,1)
    }
    renderPlaylistSong()
}


function renderPlaylistSong(){
    innerCurrentPlaylistDiv.innerText=""
    objectOfPlaylists[clickedPlaylist].forEach(song=>{
        const newDiv=document.createElement("div")
        newDiv.innerText=song.name
        newDiv.setAttribute("onclick","renderCurrentSong(event)")
        newDiv.className="innerCurrentPlaylistDivSong"
        innerCurrentPlaylistDiv.appendChild(newDiv)
    })
}
const songSearchNameInput=document.getElementsByClassName("songSearchNameInput")[0]
const playlistSearchNameInput=document.getElementsByClassName("playlistSearchNameInput")[0]
function searchSong(){
    let songPresent=false
    songsArray.forEach(song=>{
        if(song.name==songSearchNameInput.value.trim()){
            songPresent=true
        }
    })
    if(songPresent){
        clickedSongObject=songsArray.filter((song)=>{
            return song.name==songSearchNameInput.value.trim()
        })[0]
        albumImage.src=clickedSongObject.img
        currentSonngName.innerText=clickedSongObject.name
        artistName.innerText=clickedSongObject.artist
        audioSource.setAttribute("src",clickedSongObject.source)
        audioElement.load()
    }
    else{
        alert("Song not found, check caps")
    }
    songSearchNameInput.value=""
}
function searchPlaylist(){
    if(playlistSearchNameInput.value in objectOfPlaylists){
        clickedPlaylist=playlistSearchNameInput.value
        renderPlaylistSong()
    }
    else{
        alert("Playlist not found, check caps")
    }
}

function toggleTheme() {
    const body = document.body;
    const themeLabel = document.querySelector(".form-check-label");

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        themeLabel.textContent = "Light";
    } else {
        body.classList.add("dark-mode");
        themeLabel.textContent = "Dark";
    }
}


