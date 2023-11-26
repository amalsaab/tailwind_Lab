import React from 'react'
import chairImage from '../assets/chair.jpg'
import T_chirt from '../assets/left.jpg'

function Header() {
  return (
    <>
        <div className='flex justify-center p-5 gap-3'>
            <img className='w-[40vw] border' src={chairImage} alt="" />
            <img className='w-[20vw] border' src={T_chirt} alt="" />
        </div>
    </>
  )
}

export default Header