import React, { useState } from "react";
import avatarImage from "../../assets/useravatar.svg";
import { VscEye } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import UserManagementBtns from "./usermanagment-btns";


function UserManagement() {
  const membersPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const members = [
    {
      id: 1,
      avatar: avatarImage,
      name: "mohamed dola",
      mobile: "01143333265",
      status: "warning",
    }
  ];
  const totalMembers = members.length;
  const totalPages = Math.ceil(totalMembers / membersPerPage);

  const handleClickNext = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handleClickBack = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const [enabled, setEnabled] = useState(false);
 

  return (
    <>
      <div>
        <div className="w-[700px] bg-transparentColor flex flex-row gap-2 ml-6">
          <div className="bg-white rounded-t-lg flex flex-row justify-center text-center mb-2 w-1/3 gap-7 p-4">
            <div className="text-primaryColor flex flex-row justify-center items-center font-semibold text-center ">
              Members
            </div>
            <div className="text-secondaryColor flex flex-row justify-center items-center font-semibold text-center">
              Admins
            </div>
          </div>

          <div className="flex flex-col items-center justify-center overflow-hidden">
            <div className="flex gap-2">
            <div className="text-secondaryColor flex flex-row justify-center items-center text-[12px] font-semibold text-center">
            Assumption
            </div>
              <label className="inline-flex relative items-center mr-4 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={enabled}
                  readOnly
                />
                <div
                  onClick={() => setEnabled(!enabled)}
                  className={`w-8 h-4 rounded-full peer peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-600 ${
                    enabled ? "bg-primaryColor" : "bg-secondaryColor"
                  }`}
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-6 bg-transparentColor mt-2 mb-2 ml- flex flex-row justify-between ">
        {/* addnew export import filter */}
      <UserManagementBtns />
      </div>
      <div className="flex flex-col bg-transparentColor rounded-t-2xl">
        {/* header */}
      <div className="flex justify-center items-center gap-2">
        {enabled ? (
           <>
           <div className="p-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
             Photo
           </div>
           <div className="p-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
             Member Name
           </div>
           <div className="p-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
             ID
           </div>
           <div className="p-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
            Seed
          </div>
          <div className="p-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
          Status
        </div>
       <div className="p-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
         Result
       </div>
       <div className="p-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5 rounded-tr-2xl">
          Operations
        </div>
         </>
          
        ) : (
          <>
          <div className="p-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
            Photo
          </div>
          <div className="p-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
            Member Name
          </div>
          <div className="p-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
            Mobile Number ID
          </div>
          <div className="p-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
          Status
        </div>
        <div className="p-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5 rounded-tr-2xl">
          Operations
        </div>
        </>
        )}
      </div>

      {members
          .slice(
            (currentPage - 1) * membersPerPage,
            currentPage * membersPerPage
          )
          .map((member) => (
            <div
              key={member.id}
              className="flex justify-center items-center gap-2 bg-white mt-2 mb-2"
            >
              
              {enabled ? (
                <>
                <div className="p-4 text-center self-center flex justify-center w-1/5">
                <div className="w-8 h-8 overflow-hidden rounded-full">
                  <img
                    src={member.avatar}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-4 text-center font-semibold text-[15px] w-1/5 text-secondaryColor">
                {member.name}
              </div>
                  <div className="p-4 text-center font-semibold text-[15px] w-1/5 text-secondaryColor">
                    {member.id}
                  </div>
                  <div className="p-4 text-center font-semibold text-[15px] w-1/5 text-secondaryColor">
                    Tomatoes
                  </div>
             
                  <div className="p-4 text-center w-1/5">
                <div
                  className={`text-sm w-[100px] p-2 font-normal flex justify-center rounded-md ${getStatusColor(
                    member.status
                  )}`}
                >
                  <span>{member.status}</span>
                </div>
              </div>
                  <div className="p-4 text-center font-semibold text-[15px] w-1/5 text-secondaryColor">
                    100%
                  </div>
                  <div className="p-4 text-center w-1/5">
                <button className="cursor-pointer border-none outline-none px-2 py-1 rounded bg-transparentColor">
                  <i className="text-primaryColor">
                    <FiEdit size={15} />
                  </i>
                </button>
                <button className="cursor-pointer border-none outline-none px-2 py-1 rounded bg-transparentColor">
                  <i className="text-primaryColor">
                    <FaRegTrashAlt size={15} />
                  </i>
                </button>
              </div>
                </>
              ) : (
                <>
                <div className="text-center self-center w-1/5 flex justify-center">
                <div className="w-8 h-8 overflow-hidden rounded-full">
                  <img
                    src={member.avatar}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-4 text-secondaryColor font-bold text-[14px] text-center w-1/5">
                {member.name}
              </div>
              <div className="p-4 text-secondaryColor font-bold text-[14px] text-center w-1/5">
                  {member.mobile}
                </div>
                <div className="p-4 text-center flex justify-center items-center w-1/5">
                <div
                  className={`text-sm w-[100px] p-2 font-normal rounded-md ${getStatusColor(
                    member.status
                  )}`}
                >
                  <span>{member.status}</span>
                </div>
              </div>
                <div className="flex items-center justify-center w-1/5">
                <button className="cursor-pointer border-none outline-none px-2 py-1 rounded bg-transparentColor">
                  <i className="text-primaryColor">
                    <VscEye size={15} />
                  </i>
                </button>
                <button className="cursor-pointer border-none outline-none px-2 py-1 rounded bg-transparentColor">
                  <i className="text-primaryColor">
                    <FiEdit size={15} />
                  </i>
                </button>
                <button className="cursor-pointer border-none outline-none px-2 py-1 rounded bg-transparentColor">
                  <i className="text-primaryColor">
                    <FaRegTrashAlt size={15} />
                  </i>
                </button>
                <button className="cursor-pointer font-semibold text-center p-3 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none">
                  From Map
                </button>
              </div>
                </>
              )}
              
             
            </div>
          ))}
      </div>
      <div className="flex justify-center items-center mt-2 mb-2">
        <button
          className="cursor-pointer font-semibold text-center p-2 px-10 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none"
          onClick={handleClickBack}
        >
          <span className="font-extrabold">Back</span>
        </button>
        <span className="mx-4 text-secondaryColor">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="cursor-pointer font-semibold text-center p-2 px-10 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none"
          onClick={handleClickNext}
        >
          <span className="font-extrabold">Next</span>
        </button>
      </div>
    </>
  );
}

const getStatusColor = (status) => {
  switch (status) {
    case "warning":
      return "bg-warning-background text-warning-text";
    case "banned":
      return "bg-banned-background text-banned-text";
    case "not-violated":
      return "bg-not-violated-background text-not-violated-text";
    default:
      return "bg-black text-white";
  }
};

export default UserManagement;
