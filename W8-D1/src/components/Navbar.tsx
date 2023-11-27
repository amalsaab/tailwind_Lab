import borgerImage from '../assets/burger-menu.svg'

function Navbar() {
  return (
    <>
        <div className='w-screen h-16 bg-yellow-400 px-20 font-semibold flex'> 
            <ul className='flex flex-row items-center justify-center gap-5 w-full h-full '>
                <li>ALL CAREGORIES</li>
                <li className='text-[#00000084]'>TODAY DEALS</li>
                <li>ELECTRONICS</li>
                <li>CLOTHINGS</li>
                <li>COMPUTERS</li>
                <li>FURNITURES</li>
                <li>MOM & BABY</li>
                <li>BOOKS & MORE</li>
            </ul>
            <img className='hidden' src={borgerImage} alt="" />
        </div>
    </>
  )
}

export default Navbar