import './index.css'
import MovieCard from './MovieCard'
const movies = () => {
const movies = [
  {
    imgSrc: 'https://image.tmdb.org/t/p/w500/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg', // Red Notice
  },
  {
    imgSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRomheKnqdUJw02q3EqGjAM53oP9hTD_uutL7wJbtcSLypCmVwC', // Damsel (2024)
  },
  {
    imgSrc: 'https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg', // Rebel Moon Part Two
  },
  {
    imgSrc: 'https://image.tmdb.org/t/p/w500/8GnWDLn2AhnmkQ7hlQ9NJUYobSS.jpg', // Argylle
  },
  {
    imgSrc: 'https://image.tmdb.org/t/p/w500/mMnzNYvpqLLLdgF5TMmXfuy6wzx.jpg', // Wish
  },
  {
    imgSrc: 'https://image.tmdb.org/t/p/w500/ldfCF9RhR40mppkzmftxapaHeTo.jpg', // Civil War (2024)
  },
  {
    imgSrc: 'https://image.tmdb.org/t/p/w500/f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg', // Immaculate
  },
  {
    imgSrc: 'https://image.tmdb.org/t/p/w500/5Eip60UDiPLASyKjmHPMruggTc4.jpg', // The Garfield Movie (2024)
  },
  {
    imgSrc: 'https://image.tmdb.org/t/p/w500/kYgQzzjNis5jJalYtIHgrom0gOx.jpg', // Anyone But You
  },
  {
    imgSrc: 'https://image.tmdb.org/t/p/w500/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg', // Aquaman and the Lost Kingdom
  },
]


  return (
    <div className='movies'>
        <h3 className='title'>Trending Now</h3>
        <div
        className='slider'
        >
            {movies.map((movie,index)=>(
                <MovieCard
                    key={index}
                    imgSrc={movie.imgSrc}
                    trendingNo={index+1}
                />
            ))}
        </div>
    </div>
  )
}

export default movies