import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <nav className='w-full fixed z-50'>
      <div
        className='
          flex
          flex-row
          px-4
          py-6
          md:px-16
          items-center
          transition
          duration-500
          bg-zinc-900
          bg-opacity-90
        '
      >
        <img src='/images/logo.png' alt='logo' className="h-3 lg:h-7"></img>
        <div 
          className='
            flex-row
            ml-8
            gap-7
            flex
          '
        >
          <NavbarItem label='Home'/>
          <NavbarItem label='TV Shows'/>
          <NavbarItem label='Movies'/>
          <NavbarItem label='My List'/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar