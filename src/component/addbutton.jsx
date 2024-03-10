import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function AddButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = () => {
    setIsDropdownOpen(false);
  };

  return (
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
          {location.pathname === "/dashboard/assumption" && (
            <Link
              to={"create-assumption"}
              className="block w-full no-underline cursor-pointer text-center py-2 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-md outline-none border-none"
              onClick={() => handleOptionClick('Assumption')}
            >
              Assumption
            </Link>
          )}
          {location.pathname === "/dashboard/user-management" && (
            <Link
              to={"member"}
              className="block w-full no-underline cursor-pointer text-center py-2 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-md outline-none border-none"
              onClick={() => handleOptionClick('Member')}
            >
              Member
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
