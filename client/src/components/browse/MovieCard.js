import { useState, useEffect } from 'react'
import axios from '../../requests/axios'
import {BsChevronDown, BsPlus, BsDot} from 'react-icons/bs'
import {BiMovie, BiVideoPlus} from 'react-icons/bi'

const image_url = "https://image.tmdb.org/t/p/original"

const MovieCard = (movie) => {
  const[isMovie, setisMovie] = useState(false)
  const[details, setDetails] = useState({});

  const id = movie.id
  const media_type = movie.media_type
  
  useEffect (() => {
    const fetchData = async () => {
      let url = ``
      if (media_type === 'movie') {
        url = `/movie/${id}?api_key=ba294511bdf2ec831406bdf7d2a8f466`
        setisMovie(true)
      } else if (media_type === 'tv') {
        url = `/tv/${id}?api_key=ba294511bdf2ec831406bdf7d2a8f466`
      };

      try {
        const request = await axios.get(url)
        console.log(request.data)
        setDetails(request.data)
        return request
      } catch (err) {
        console.error(err.message)
      }
    }
    fetchData();
  }, [id, media_type])

  console.log(details)

  const matchPercentage = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className='group bg-zinc-900 col-span relative min-h-[12vw]'>
      <img 
        src={`${image_url}${details.backdrop_path}`} 
        alt={details.title ? details.title : details.name}
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
          group-hover:scale-[1.4]
          xl:group-hover:scale-[1.2]
          group-hover:-translate-y-[6vw]
          group-hover:translate-x-[1vw]
          group-hover:opacity-100
        '
      >
        <img 
          src={`${image_url}${details.backdrop_path}`} 
          alt={isMovie ? details.title : details.name}
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
            p-3
            lg:p-3
            absolute
            w-full
            transition
            shadow-md
            rounded-b-md
            flex flex-wrap
          '
        >
          <div className='flex flex-row justify-end gap-2'>
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
          <p className='text-white text-2xl font-bold drop-shadow-lg align-middle w-full justify-start mt-2'>
            {isMovie ? details.title : details.name}
          </p>
          <p className='text-green-400 font-semibold text-xs w-full py-1'>
            {matchPercentage(90, 100)}% match 
            {isMovie ? (
              <span className='text-gray-400 ml-1'> <BiMovie className='inline mr-1' size={16}/> {details.runtime} minutes </span>
            ) : (details.number_of_seasons === 1) ? (
              <span className='text-gray-400 ml-1'> <BiVideoPlus className='inline mr-1' size={20}/> {details.number_of_episodes} episodes </span>
            ) : (
              <span className='text-gray-400 ml-1'> <BiVideoPlus className='inline mr-1' size={20}/> {details.number_of_seasons} seasons </span>
            )}
          </p>
          <div className='flex flex-row items-center w-full py-1'>
            {details.genres ? (
              details.genres.slice(0, 3).map((genre) => (
                <p className='text-white font-semibold text-xs flex flex-row'>
                  {genre.name} <span><BsDot size={18} color='grey'/></span> 
                </p>
              )
            )) : ''}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default MovieCard