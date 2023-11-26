import React from 'react'
import Card from './Card'
import TV from '../assets/TV.jpg'
import Clothes from '../assets/clothes.jpg'
import Laptop from '../assets/Laptop.jpg'
import Sofa from '../assets/sofa.jpg'
import Beauty from '../assets/Beauty.jpg'
import watch from '../assets/watch.jpg'

function Cardsection() {
  return (
    <>
        <div className='flex flex-col pb-4'>
            <h1 className='text-xl font-medium border-b-2 pb-2'>Top Categories Of The Month</h1>
            <div className='flex gap-5 flex-wrap pt-5'>
                <Card src={TV} title="Electronics" pro={["TV Televisions", "Air Conditioners", "Washing Machines", "Audio & Theaters", "Office Electronics"]}/>
                <Card src={Clothes} title="Clothings" pro={["Womens", "Mens", "Bags & Backpacks", "Accessories"]}/>
                <Card src={Laptop} title="Computers" pro={["Desktop PC", "Laptop", "PC Gaming", "Storage & Memory", "PC Components"]}/>
                <Card src={Sofa} title="Home & Kitchen" pro={["Funitures", "Decor", "Cookwares", "Utensil & Gadgets", "Garden Tools"]}/>
                <Card src={Beauty} title="Healthy & Beauty" pro={["Makeup", "Skin Care", "Hair Care", "Tools & Equipments", "Perfurmes"]}/>
                <Card src={watch} title="Jewelry & Watch" pro={["Pendant", "Necklace", "Watch", "Bracelets", "Accessories"]}/>
            </div>
        </div>
    </>
  )
}

export default Cardsection