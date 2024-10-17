// https://www.googleapis.com/youtube/v3/search?part=snippet&q=javascript&type=video&maxResults=20&key=AIzaSyARa9U-jaYkSpCSAL5AdoHFKEtrgRVUb8Q
let query=''
function searchFunction(){
    const searchBar=document.getElementsByClassName("searchBar")[0]
    query=searchBar.value
    fetchVideos(query)
}

// const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=20&key=AIzaSyARa9U-jaYkSpCSAL5AdoHFKEtrgRVUb8Q`
async function fetchVideos(query){
    try{
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=20&key=AIzaSyARa9U-jaYkSpCSAL5AdoHFKEtrgRVUb8Q`)
        const data=await res.json()
        displayVideo(data.items)
    }
    catch(error){
        console.log(error)
    }
}


function displayVideo(videos) {
    let vidContainer = document.getElementById("vidcontainer")
    vidContainer.innerHTML=''
    videos.forEach(video => {
       const {videoId}=video.id
        const iFrame = document.createElement("iframe")
        iFrame.width = "350"
        iFrame.height = "200"
        iFrame.src = `https://www.youtube.com/embed/${videoId}?si=aoSRrnzrqh4vNjHP&vq=hd720`
        iFrame.title = "YouTube video player"
        iFrame.frameBorder = "0"
        iFrame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        iFrame.referrerPolicy = "strict-origin-when-cross-origin"
        iFrame.allowFullscreen = true
        vidContainer.append(iFrame)
    });

}


