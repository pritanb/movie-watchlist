import React, { useContext } from 'react'
import { logout } from '../../../context/authContext/AuthAction';
import { AuthContext } from '../../../context/authContext/AuthContext';

const AccountMenu = () => {  
  const {user, dispatch} = useContext(AuthContext);

  return (
    <div className='bg-black w-56 absolute top-14 right-0 py-5 flex flex-col rounded-sm opacity-80 border-2 border-gray-800'>
      <div className='flex flex-col gap-3'>
        <div className='px-3 flex flex-row gap-3 items-center w-full'>
          <img className='w-8 rounded-md' src="/images/default-blue.png" alt="" />
          <p className='text-white text-sm hover:underline'>
            {user.username}
          </p>
        </div>
        <hr className='bg-gray-800 border-0 h-[1px] my-2'/>
        <p className='text-center text-white text-sm hover:underline' onClick={() => dispatch(logout())}>
          Sign out of Netflix
        </p>
      </div>
    </div>
  )
}

export default AccountMenu