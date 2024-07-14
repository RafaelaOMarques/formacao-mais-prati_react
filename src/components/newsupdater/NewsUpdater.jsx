import { useState, useEffect } from "react";
import './NewsUpdater.css'

function NewsUpdater(){
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  const [paginatorI, setpaginatorI] = useState(0);
  const [paginatorF, setpaginatorF] = useState(5);

  useEffect(()=>{

    
    const fetchNews = async() =>{ 
      setIsLoading(true)

      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await response.json()
        setNews(data.slice(paginatorI, paginatorF))
    
      } catch(error) {
        console.log('Falha na requisição', error)
      }

      setIsLoading(false)
    
    }
    fetchNews()

    const interval = setInterval(()=>{
      setpaginatorI((prev) => prev+5);
      setpaginatorF((prev)=> prev+5);
    }, 2000)

    return ()=> clearInterval(interval)
  },  [paginatorI, paginatorF])

  return(
    <div>
      <h1>Últimas Noticias Simuladas</h1>
      {isLoading ? (
        <p>Carregando noticias</p>
      ) : (
        <ul className="list-news">
          {
            news.map((article) =>(
              <li key={article.id}>
                <p>{article.title}</p>
              </li>
            ))
          }
        </ul>
      )}
    </div>
  )
 
}

export default NewsUpdater