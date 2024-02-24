import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Member from './member';
import Assumption from './assumption';


export default function Addbutton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    console.log(`Selected option: ${option}`);
    setIsDropdownOpen(false);
  };
  
  return (
      <>
      <div className="relative">
        <button
          className="cursor-pointer flex flex-row gap-2 font-semibold text-center py-3 px-4 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none"
          onClick={toggleDropdown}
        >
          <div>
            <FaPlus size={12} />
          </div>
          <div>Add new</div>
        </button>
        {isDropdownOpen && (
          <div className="absolute top-8 left-0 right-0 p-4 w-40 bg-white border-none outline-none rounded-2xl">
            <button
              className="cursor-pointer block w-full mb-2 text-center p-2 px-10 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-md outline-none border-none"
              onClick={() => handleOptionClick('Member')}
            >
              Member
            </button>
            <button
              className="block w-full cursor-pointer text-center p-2 px-10 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-md outline-none border-none"
              onClick={() => handleOptionClick('Assumption')}
            >
              Assumption
            </button>
          </div>
        )}
      </div>
      {selectedOption === 'Member' && <Member closeModal={setSelectedOption}/>}
      {selectedOption === 'Assumption' && <Assumption closeModal={setSelectedOption}/>}
      </>
      
  );
}
