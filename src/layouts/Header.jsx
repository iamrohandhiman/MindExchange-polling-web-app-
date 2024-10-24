import React from 'react'
import { CreatePollHeader } from './CreatePollHeader'

export const Header = () => {
  return (
  <div class>
    <div className=" flex justify-between items-center g-white border-black bg-white w-full">
       
     
       <div className='flex justify-center items-center '>
          {/* Logo image div */}
         <img className='h-[70px]' src="../../assets/MindExchangeLogo.png" />
          
          {/* search bar */}
         <input type="" placeholder="Search..." className="search-bar w-[200px] h-10 pl-3 outline-none text-[18px]" />

       </div>
     
       {/* user Sign in */}
       <div className='flex justify-center items-center pr-8'>
           <div className='font-Sabon text-[20px] cursor-pointer hover:opacity-45 transition-all delay-10'>Sign in</div>
       </div>
       

     </div>

     <div className='w-full h-[20px] bg-blue-400'> </div>

     <CreatePollHeader></CreatePollHeader>

     </div>
  )
}
