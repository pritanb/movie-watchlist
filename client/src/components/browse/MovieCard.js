import React from 'react'
import {BsChevronDown, BsPlus} from 'react-icons/bs'

const base_url = "https://image.tmdb.org/t/p/original"

const MovieCard = (movie) => {
  console.log(movie)
  return (
    <div className='group bg-zinc-900 col-span relative h-[12vw]'>
      <img 
        src={`${base_url}${movie.backdrop_path}`} 
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
          src={`${base_url}${movie.backdrop_path}`} 
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
            lg:p-4
            absolute
            w-full
            transition
            shadow-md
            rounded-b-md
          '
        >
          <p className='text-white font-semibold text-[12px] float-left w-2/3 align-middle'>
              {movie.title}
          </p>
          <div className='flex flex-row float-right gap-2'>
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