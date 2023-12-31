import { useState, useEffect, useContext } from 'react'
import axios from '../../requests/axios'
import axiosDB from 'axios'
import {BsChevronDown, BsPlus, BsDot} from 'react-icons/bs'
import {BiMovie, BiVideoPlus} from 'react-icons/bi'
import { AuthContext } from '../../context/authContext/AuthContext'

const backendUrl = process.env.REACT_APP_BACKEND_URL;
const image_url = "https://image.tmdb.org/t/p/original"

const MovieCard = ({movie}) => {
  const[isMovie, setisMovie] = useState(false)
  const[details, setDetails] = useState({});

  const {user} = useContext(AuthContext)

  const {id, media_type} = movie
  
  useEffect (() => {
    const fetchData = async () => {
      let url = ``
      if (media_type === 'movie') {
        url = `/movie/${id}?api_key=ba294511bdf2ec831406bdf7d2a8f466`
        setisMovie(true)
      } else if (media_type === 'tv') {
        url = `/tv/${id}?api_key=ba294511bdf2ec831406bdf7d2a8f466`
      } else if (media_type === undefined) {
        if (movie.first_air_date !== undefined) {
          url = `/tv/${id}?api_key=ba294511bdf2ec831406bdf7d2a8f466`
        } else {
          url = `/movie/${id}?api_key=ba294511bdf2ec831406bdf7d2a8f466`
          setisMovie(true)
        }
      };

      try {
        const request = await axios.get(url)
        setDetails(request.data)
        return request
      } catch (err) {
        console.error(err.message)
      }
    }
    fetchData();
  }, [id, media_type, movie.first_air_date])

  const matchPercentage = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const addToMyList = (e) => {
    const add = async () => {
      try {
        const movieData = {
          user: user.username,
          movie: details
        }
        const request = await axiosDB.post(`${backendUrl}/movies`, movieData, {
          headers: {
            token: `Bearer ${user.accessTkn}`
          }
        });
        console.log(request.data)
      } catch (err) {
        console.log(err)
      }
    }
    
    add();
    e.preventDefault();
    console.log(`Added ${id} to list`);
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
              onClick={addToMyList}
            >
              <BsPlus size={16} />
            </div>
          </div>
          <p className='text-white text-2xl font-bold drop-shadow-lg align-middle w-full justify-start mt-2'>
            {isMovie ? details.title : details.name}
          </p>
          {details.release_date || details.first_air_date ? (<p className='text-gray-400 text-xs font-semibold'>
            {isMovie ? details.release_date.split('-')[0] : details.first_air_date.split('-')[0]}
          </p>) : null}
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
          <div className='flex flex-row items-center flex-wrap w-full py-1'>
            {details.genres ? (
              details.genres.slice(0, 3).map((genre, index) => (
                <p key={index} className='text-white font-semibold text-xs flex flex-row'>
                  {genre.name} <span><BsDot size={18} color='grey'/></span> 
                </p>
              )
            )) : ''}
            
            {(details.vote_average >= 8) ? (
              <p className='text-green-400 font-bold text-xs align-middle'>
              {Math.round(details.vote_average * 10) / 10}/10
              </p>
            ) : (details.vote_average >= 5) ? (
              <p className='text-yellow-400 font-bold text-xs align-middle'>
              {Math.round(details.vote_average * 10) / 10}/10
              </p>
            ) : (
              <p className='text-red-600 font-bold text-xs align-middle'>
              {Math.round(details.vote_average * 10) / 10}/10
              </p>
            )}
          </div>
          <p className='text-slate-200 text-xs align-middle'>
            {details.overview}
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default MovieCard