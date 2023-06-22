import { useState, useEffect } from 'react'
import axios from '../../requests/axios'
import {BsChevronDown, BsPlus, BsDot} from 'react-icons/bs'

const image_url = "https://image.tmdb.org/t/p/original"

const MovieCard = (movie) => {
  const[details, setDetails] = useState({
    id: "",
    title: "",
    overview: "",
    backdrop_path: "",
    genres: [],
    release_date: "",
    runtime: "", 
    languages: [],
    rating: "",
  });

  const id = movie.id
  
  useEffect (() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(`/movie/${id}?api_key=ba294511bdf2ec831406bdf7d2a8f466`)
        const data = request.data
        const res = {
          id: data.id,
          title: data.original_title,
          overview: data.overview,
          backdrop_path: data.backdrop_path,
          genres: data.genres, 
          release_date: data.release_date,
          runtime: data.runtime, 
          languages: data.spoken_languages,
          rating: data.vote_average
        }
        setDetails(res)
        return request
      } catch (err) {
        console.error(err.message)
      }
    }
    fetchData();
  }, [id])

  console.table(details )

  return (
    <div className='group bg-zinc-900 col-span relative min-h-[12vw]'>
      <img 
        src={`${image_url}${movie.backdrop_path}`} 
        alt={movie.title}
        className='
          cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-md
          group-hover:opacity-90
          sm:group-hover:opacity-0
          delay-300
          w-full
          h-[12vw]
        '
      />
      <div
        className='
          opacity-0
          absolute
          top-0
          transition
          duration-200
          z-10
          invisible
          sm:visible
          delay-300
          w-full
          scale-0
          group-hover:scale-150
          group-hover:-translate-y-[6vw]
          group-hover:opacity-100
        '
      >
        <img 
          src={`${image_url}${movie.backdrop_path}`} 
          alt={movie.title}
          className='
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-t-md
            w-full
            h=[12vw]
          '
        />
        <div 
          className='
            z-10
            bg-zinc-800
            p-2
            lg:p-2
            absolute
            w-full
            transition
            shadow-md
            rounded-b-md
            flex flex-wrap
          '
        >
          <p className='text-white font-bold drop-shadow-lg pr-2 align-middle w-full justify-start'>
              {movie.title}
          </p>
          <div className='flex flex-row items-center w-full'>
            
              {details.genres.slice(0, 3).map((genre) => (
                <p className='text-white font-semibold text-xs flex flex-row'>
                  {genre.name} <span><BsDot size={18} color='grey'/></span> 
                </p>
              ))}
          </div>
          <p className='text-white text-xs w-full'>
            {details.runtime} minutes
          </p>
          <div className='flex flex-row justify-end gap-2 mt-4'>
            <div 
              className='
                cursor-pointer
                w-6
                h-6
                lg:w-8
                lg:h-8
                bg-zinc-800
                rounded-full
                flex
                justify-center
                items-center
                transition
                border
                border-zinc-400
                hover:border-2
                hover:border-white
              '
              onClick={() => {}}
            >
              <BsChevronDown className='pt-0.5' size={14} />
            </div>
            <div 
              className='
                cursor-pointer
                w-6
                h-6
                lg:w-8
                lg:h-8
                bg-zinc-800
                rounded-full
                flex
                justify-center
                items-center
                transition
                border
                border-zinc-400
                hover:border-2
                hover:border-white
              '
              onClick={() => {}}
            >
              <BsPlus size={16} />
            </div>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default MovieCard