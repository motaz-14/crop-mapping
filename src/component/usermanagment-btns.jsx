import React from 'react'
import { CiExport } from "react-icons/ci";
import { CiImport } from "react-icons/ci";
import Addbutton from "./addbutton";
import { CiFilter } from "react-icons/ci";

function UserManagementBtns() {
  return (
    <>
      <div className="flex flex-row gap-8">
      <Addbutton/>
      <div>
      <button
          className="cursor-pointer flex flex-row gap-2 justify-center items-center font-semibold text-center py-2 px-4 bg-transparentColor text-primaryColor rounded-lg outline-none border-primaryColor border"
        >
          <div>
            <CiExport size={14} />
          </div>
          <div>Import Members</div>
        </button>
      </div>
      <div>
      <button
          className="cursor-pointer flex flex-row gap-2 justify-center items-center font-semibold text-center py-2 px-4 bg-transparentColor text-primaryColor rounded-lg outline-none border-primaryColor border"
        >
          <div>
            <CiImport size={14} />
          </div>
          <div>Export Members</div>
        </button>
      </div>
      </div>
      <div className="flex flex-row px-8 justify-center">
      <button
          className="cursor-pointer flex flex-row justify-center items-center gap-2 font-semibold text-center py-3 px-4 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none"
        >
          <div>
          <CiFilter size={14}/>
          </div>
          <div>Filters</div>
        </button>
      </div>
    </>
  )
}

export default UserManagementBtns