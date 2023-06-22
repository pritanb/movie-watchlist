import React, { useEffect, useState } from "react";
import axios from '../../requests/axios'
import requests from "../../requests/requests";

import {AiOutlineInfoCircle} from 'react-icons/ai'

const image_url = "https://image.tmdb.org/t/p/original"

const randomInteger = (min, max)=> {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect (() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchTrendingToday)
      setMovie(request.data.results[randomInteger(0, request.data.results.length - 1)])
      return request
    }

    fetchData();
  }, [])
 
  return (
    <div className="relative h-[56.25vw]">
      <img 
        src={`${image_url}${movie.backdrop_path}`} 
        alt='Featured Movie'
        className="w-full h-[56.25vw] object-cover brightness-[70%]"
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p 
          className="
            text-white 
            font-bold 
            text-1xl 
            md:text-5xl 
            lg:text-6xl 
            h-full 
            w-[50%] 
            drop-shadow-xl
          "
        >
          {movie.title}
        </p>
        <p 
          className="
            text-white
            md-text-lg
            mt-3
            md:mt-8
            w-[90%]
            md:w-[80%]
            lg:w-[50%]
            drop-shadow-xl
          "
        >
          {movie.overview}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button 
            className="
              bg-white 
              text-white 
              font-semibold
              flex flex-row
              items-center
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto
              lg:text-lg
              hover:bg-opacity-20
              transition
            "
          >
          <AiOutlineInfoCircle size={24} className="mr-2"/>
            More info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner