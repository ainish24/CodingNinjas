import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailNews = ({ news }) => {
  const { index } = useParams()
  const [article, setArticle] = useState({})

  useEffect(() => {
    setArticle(news[index])
  }, [index])

  return (
    <>
      {article && (
        <div>
          <p className='text-muted'>
            Published by {article.author} at {article.publishedAt}
          </p>
          <h5 className='display-5'>
            {article.title}
          </h5>
          <img
            src={article.urlToImage}
            alt={article.title}
          />
          <p className='lead mt-2'>
            {article.description}
          </p>
        </div>
      )}
    </>
  )
}

export default DetailNews