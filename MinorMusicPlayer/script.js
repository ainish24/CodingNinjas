let songsArray=[
    {   id: 1,
        name:"Winning Speech",
        artist:"Karan Aujla",
        genre:"Rap",
        img:"./songAudio/Winning Speech - Karan Aujla.mp3",
        source:"./songAlbum/Winning-Speech-Img.jpeg"
    },
    {   id: 2,
        name:"Millionaire",
        artist:"Honey Singh",
        genre:"Rap",
        img:"./songAudio/Millionaire - Yo Yo Honey Singh.mp3",
        source:"./songAlbum/Millionaire-Img.jpeg"
    },
    {   id: 3,
        name:"G.O.A.T",
        artist:"Diljit Dosanjh",
        genre:"Rock",
        img:"./songAudio/G.O.A.T - Diljit Dosanjh.mp3",
        source:"./songAlbum/GOAT-Img.jpeg"
    },
    {   id: 4,
        name:"Bandana",
        artist:"Shubh",
        genre:"Rock",
        img:"./songAudio/Bandana - Shubh.mp3",
        source:"./songAlbum/Bandana-Img.jpeg"
    },
    {   id: 5,
        name:"Antidote",
        artist:"Karan Aujla",
        genre:"Hip-Hop",
        img:"./songAudio/ANTIDOTE - Karan Aujla.mp3",
        source:"./songAlbum/Antidote-Img.jpeg"
    },
    {   id: 6,
        name:"8 Asle",
        artist:"Sukha",
        genre:"Hip-Hop",
        img:"./songAudio/8 ASLE - Sukha (DJJOhAL.Com).mp3",
        source:"./songAlbum/8-Asle-Img.jpeg"
    },
    {   id: 7,
        name:"4 Yaar",
        artist:"Rock",
        genre:"Hip-Hop",
        img:"./songAudio/4 Yaar - Parmish Verma.mp3",
        source:"./songAlbum/4-Yaar-img.jpeg"
    },
    {   id: 8,
        name:"Legend",
        artist:"Sidhu Moosewala",
        genre:"Hip-Hop",
        img:"./songAudio/Legend - Sidhu Moose Wala.mp3",
        source:"./songAlbum/Legend-Song-Img.jpeg"
    },
    {   id: 9,
        name:"Get Up Jawani",
        artist:"Honey Singh",
        genre:"Rap",
        img:"./songAudio/Get Up Jawani - Yo Yo Honey Singh.mp3",
        source:"./songAlbum/Get-Up-Jawani-Img.jpeg"
    },
    {   id: 10,
        name:"5 Taara",
        artist:"Diljit Dosanjh",
        genre:"Rock",
        img:"./songAudio/5 Taara.mp3",
        source:"./songAlbum/5-Taara-Img.jpg"
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
        songDiv.innerText=`${songName} - ${artistName}`
        songsNameContainer.appendChild(songDiv)
    })
}
showSongs();
function renderCurrentSong(){

}
function addToPlaylist(){

}
function removeFromPlaylist(){

}
function createPlaylist(){

}
function renderPlaylistSong(){
    
}
function searchSong(){

}
function searchPlaylist(){
    
}
function toggleTheme(){

}