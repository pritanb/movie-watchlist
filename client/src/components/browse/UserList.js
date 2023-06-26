import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'
import MovieCard from "./MovieCard";
import { AuthContext } from "../../context/authContext/AuthContext";

const UserList = () => {
  const [movies, setMovies] = useState([])

  const {user} = useContext(AuthContext) 

  useEffect (() => {
    const fetchData = async () => {
      const request = await axios.get('/movies', {
        headers: {
          token: `Bearer ${user.accessTkn}`
        }
      });
      console.log(request.data)
      setMovies(request.data.filter(data => data.user === user.username).map(data => data.movie))
      return request
    }

    fetchData();
  }, [user])

  console.log(movies)

  return (
    <div className='px-4 md:px-10 lg:px-14 mt-4 space-y-8 pt-40 h-[100vh]'>
      <div>
        <p className='text-gray-200 text-md md:text-xl lg:text-3xl font-semibold mb-4'>
          My List
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

export default UserList