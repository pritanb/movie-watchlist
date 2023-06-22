import React, { useEffect, useState } from "react";
import axios from '../../requests/axios'
import MovieCard from "./MovieCard";

const List = ({title, fetchURL}) => {
  const [movies, setMovies] = useState([])
  const [tvShows, setTVShows] = useState([])

  useEffect (() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL)
      console.log(request.data.results)
      setMovies(request.data.results.filter((data) => (
        data.media_type === "movie"
      )))
      setTVShows(request.data.results.filter((data) => (
        data.media_type === "tv"
      )))
      return request
    }

    fetchData();
  }, [fetchURL])

  console.table(movies)
  console.log(tvShows)
  return (
    <div className='px-4 md:px-10 mt-4 space-y-8'>
      <div>
        {/* title */}
        <p className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'>
          {title}
        </p>
        <div className='grid grid-cols-4 gap-1 md:gap-2 text-white'>
          {/* movies */}
          {movies.map((movie) => (
            <MovieCard {...movie}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default List