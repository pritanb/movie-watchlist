import React from 'react'
/*
  Forwarding Refs - https://youtu.be/gwFfzIaKnAU
*/


const Input = React.forwardRef((props, ref) => {
  /* 
    When you need to style an element based on the state of a sibling
    mark sibling with peer class
  */

  const {buttonPrompt, onClick, ...inputAttributes} = props

  return (
    <div className="flex flex-row justify-center">
      <div className='relative'>
        <input 
          ref={ref}
          {...inputAttributes}
          className='
            flex 
            rounded-md 
            px-6 
            pt-6 
            pb-2 
            min-w-[16px]
            w-[380px] 
            text-md 
            text-white
            bg-black bg-opacity-50
            border
            appearance-none
            focus:outline-4
            focus:ring-2
            peer
          '
            placeholder=' '
            required
          />
          <label 
            htmlFor={inputAttributes.id}
            className='
            absolute
            text-md
            text-zinc-400
            duration-150
            transform
            -translate-y-3
            scale-75
            top-4
            z-10
            origin-[0]
            left-6
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:-translate-y-3'
        >
          {inputAttributes.label}
        </label>
      </div>
      <button 
        className='
        bg-red-600 
        py-3
        px-6
        ml-2
        min-w-[16px]
        w-[200px] 
        text-white
        text-2xl
        font-semibold 
        rounded-md 
        hover:bg-red-700 
        transition'
        onClick={onClick}
      >
        {buttonPrompt} {">"}
      </button>  
    </div>
  )
})

export default Input