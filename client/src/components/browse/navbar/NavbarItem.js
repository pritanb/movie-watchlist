import React from 'react'

const NavbarItem = ({label}) => {
  return (
    <div 
      className='
        text-white
        font-semibold
        cursor-pointer
        hover:text-gray-300
        transition
        text-[8px]
        lg:text-[14px]
      '
    >
      {label}
    </div>
  )
}

export default NavbarItem