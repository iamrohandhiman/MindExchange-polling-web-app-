import React from 'react';
import { CreatePollHeader } from './CreatePollHeader';

export const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
      <div className="flex justify-between items-center bg-white border-black w-full">
        <div className='flex justify-center items-center'>
          {/* Logo image div */}
          <img className='h-[70px]' src="../../assets/MindExchangeLogo.png" alt="MindExchange Logo" />
          
          {/* Enhanced search bar */}
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search polls..." 
            className="search w-[200px] h-10 pl-3 outline-none text-[18px] text-gray-800  font-Sabon"
          />
        </div>
     
        {/* user Sign in */}
        <div className='flex justify-center items-center pr-8'>
          <div className='font-Sabon text-[20px] cursor-pointer hover:opacity-45 transition-all delay-10'>
            Sign in
          </div>
        </div>
      </div>

      <div className='w-full h-[20px] bg-blue-400'></div>
      <CreatePollHeader />
    </div>
  );
};