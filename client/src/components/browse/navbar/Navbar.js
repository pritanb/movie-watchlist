import React, { useCallback, useEffect, useState } from 'react';
import NavbarItem from './NavbarItem'
import AccountMenu from './AccountMenu';
import {BsSearch, BsChevronDown} from 'react-icons/bs'

const SCROLL_OFFSET = 66;

const Navbar = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  // useEffect for scroll off navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= SCROLL_OFFSET) {
        setHideNavbar(true)
      } else {
        setHideNavbar(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // callback to handle account menu
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className='w-full fixed z-40'>
      <div
        className={`
          flex
          flex-row
          px-4
          py-6
          md:px-16
          items-center
          transition
          duration-500
          ${hideNavbar ? 'bg-zinc-900 bg-opacity-90' : ''}
        `}
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
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch className="w-6" size={20} />
          </div>
          <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="" />
            </div>
            <BsChevronDown className={`w-4 text-white fill-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
            {showAccountMenu ? <AccountMenu /> : ''}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar