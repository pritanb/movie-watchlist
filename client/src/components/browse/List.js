import React, { useEffect, useState } from "react";
import axios from '../../requests/axios'
import MovieCard from "./MovieCard";

const List = ({title, fetchURL}) => {
  const [movies, setMovies] = useState([])

  useEffect (() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL)
      console.log(request.data.results)
      setMovies(request.data.results)
      return request
    }

    fetchData();
  }, [fetchURL])

  return (
    <div className='px-4 md:px-10 lg:px-14 mt-4 space-y-8'>
      <div>
        {/* title */}
        <p className='text-gray-200 text-md md:text-xl lg:text-3xl font-semibold mb-4'>
          {title}
        </p>
        <div className='grid grid-cols-4 gap-1 md:gap-2 text-white grow'>
          {/* movies */}
          {movies.slice(0, 8).map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default List