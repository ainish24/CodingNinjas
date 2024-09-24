// let url= "https://api.worldnewsapi.com/search-news?text=cricket&language=en&api-key=c359cf1e1b8f48ddb9b597ce34d3da4a"
let url="https://newsapi.org/v2/top-headlines?category=technology&apiKey=f40203cc39184176a487521beaf0836b"
let news_array=[]


    fetch(url)
    .then(res=>{
     return res.json()
    })
    .then(res=>{
        news_array=res.articles
        displayNews()
    }).catch(error=>{
        console.log(error)
    })

function displayNews(){
    news_array.forEach(news => {
        const outer_container=document.getElementsByClassName("container")[0]
        const news_container = document.createElement("div")
        news_container.classList.add("news-container")
        const news_img=document.createElement("img")
        news_img.classList.add("news-img")
        news_img.src=news.urlToImage
        const news_title=document.createElement("div")
        news_title.classList.add("title")
        news_title.innerText=news.title
        const news_content=document.createElement("div")
        news_content.classList.add("content")
        news_content.innerText=news.description
        const published_by=document.createElement("p")
        published_by.classList.add("published-by")
        published_by.innerText="Published by:- "+news.author
        const published_date=document.createElement("p")
        published_date.classList.add("published-date")
        published_date.innerText="Published date:- "+news.publishedAt
        const read_more=document.createElement("p")
        read_more.classList.add("read-more")
        read_more.innerHTML=`<a href=${news.url} target="_blank">Read More...</a>`
        if(news.urlToImage!=null && news.title!=null && news.description!=null && news.author!=null && news.publishedAt!=null){
            news_container.append(news_img,news_title, news_content, published_by, published_date, read_more)
            outer_container.append(news_container)
        }

    });

}



