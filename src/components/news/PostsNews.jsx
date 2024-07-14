import { useState, useEffect } from "react";
import './PostsNews.css'

function PostsNews(){
  const [news, setNews] = useState(null)
  const [count, setCount] = useState(0)

  const fetchNewsData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
    const newsData = await response.json()
    setNews(newsData);
  }

  useEffect(()=>{
    const timerId = setInterval(()=>{
      fetchNewsData();
      setCount(prevCount => prevCount+1)
    
    }, 2000)
    return()=>clearInterval(timerId)
  })

  return(
    <>
    <div>
      {news ? (
        <div>
          <h1 className="post-title">{news.title}</h1>
          <p className="post-new">{news.body}</p>
        </div>

      ) : (
        <div>Carregando...</div>
      )}
    </div>
    </>
  )
}

export default PostsNews