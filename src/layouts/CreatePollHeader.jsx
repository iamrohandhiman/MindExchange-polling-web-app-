import React from "react";
import { NavLink } from "react-router-dom";

export const CreatePollHeader = () => {
  return (
    <div className="flex justify-start items-center">
      {/* Create Poll Button */}
      <div className="flex items-center justify-start">
        <NavLink 
          to="/CreatePoll"
          className={({ isActive }) => `
            mt-5 flex flex-col justify-between items-center font-Sabon text-[20px] font-bold w-[200px] h-[50px] cursor-pointer ml-3 hover:bg-blue-100
            ${isActive ? 'bg-cover bg-center' : ''}
          `}
          style={({ isActive }) => 
            isActive 
              ? {
                  backgroundImage: `url('../../public/assets/CreatePoll.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : {}
          }
        >
          <div className="w-full text-center pt-2">
            <div className="flex justify-center items-center space-x-2">
              <div>Create Poll</div>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343">
                <path d="M480-560h200v-80H480v80Zm0 240h200v-80H480v80ZM360-520q33 0 56.5-23.5T440-600q0-33-23.5-56.5T360-680q-33 0-56.5 23.5T280-600q0 33 23.5 56.5T360-520Zm0 240q33 0 56.5-23.5T440-360q0-33-23.5-56.5T360-440q-33 0-56.5 23.5T280-360q0 33 23.5 56.5T360-280ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
              </svg>
            </div>
          </div>
          <div className="bg-black w-full h-[3px] shadow" />
        </NavLink>
      </div>

      {/* Browse Poll Button */}
      <div className="flex items-center justify-start">
        <NavLink 
          to="/"
          className={({ isActive }) => `
            mt-5 flex flex-col justify-between items-center font-Sabon text-[20px] font-bold w-[200px] h-[50px] cursor-pointer ml-3 hover:bg-blue-100
            ${isActive ? 'bg-cover bg-center' : 'bg-gray-100'}
          `}
          style={({ isActive }) => 
            isActive 
              ? {
                  backgroundImage: `url('../../public/assets/CreatePoll.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              : {}
          }
        >
          <div className="w-full text-center pt-2">
            <div className="flex justify-center items-center space-x-2">
              <div>Browse Poll</div>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343">
                <path d="M120-440v-320q0-33 23.5-56.5T200-840h240v400H120Zm240-80Zm160-320h240q33 0 56.5 23.5T840-760v160H520v-240Zm0 720v-400h320v320q0 33-23.5 56.5T760-120H520ZM120-360h320v240H200q-33 0-56.5-23.5T120-200v-160Zm240 80Zm240-400Zm0 240Zm-400-80h160v-240H200v240Zm400-160h160v-80H600v80Zm0 240v240h160v-240H600ZM200-280v80h160v-80H200Z"/>
              </svg>
            </div>
          </div>
          <div className="bg-black w-full h-[3px] shadow" />
        </NavLink>
      </div>
    </div>
  );
};

export default CreatePollHeader;