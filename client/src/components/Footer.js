import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="bg-transparent font-bold shadow m-40">
      <div className="w-full mx-auto max-w-screen-3xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-gray-500 sm:text-center dark:text-gray-400"> 
            Pritan Barai | 2023
          </span>
        <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <a href="https://github.com/pritanb">
            <AiFillGithub className='hover:text-white mr-2' size={36}></AiFillGithub>
          </a>
          <a href="https://www.linkedin.com/in/pritan-barai-83a68a1b7/">
            <AiFillLinkedin className='hover:text-white' size={36}></AiFillLinkedin>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer