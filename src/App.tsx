import './index.css'
import { Header } from './Components/Header/Header'
import axios from 'axios'
import { options } from './service/base'
import { useEffect, useState } from 'react'
import { Movie } from './type'

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const getMovies = async() => {
    const response =  await axios.request(options);
    setMovies(response.data)
  }
  useEffect(() => {
   getMovies();
  }, [])
  return (
    <div>
      <Header/>
      <div className='grid grid-cols-5 gap-3'>
        {movies.map((movie) => (
          <li key={movie.id} className='max-w-[200px] w-full'>
            <h3>{movie.primaryTitle}</h3>
            <img src={movie.primaryImage} alt="" />
            <p>{movie.description}</p>
          </li>
        ))}
      </div>
    </div>
  )
}

export default App
