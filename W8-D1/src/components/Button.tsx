import React from 'react'

function Button(props: { text: string }) {
  return (
    <>
        <button className='bg-[#feb801] rounded-md px-4 py-2 text-black font-medium'>{props.text}</button>

    </>
  )
}

export default Button