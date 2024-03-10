import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import UserManagementBtns from "../user_management/usermanagment-btns";
import axios from "axios";
import Cookies from "js-cookie";

function Assumption() {
  const membersPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const [members , setMembers] = useState([]);
  // eslint-disable-next-line
  const [admin , setAdmin] = useState([]);
  // eslint-disable-next-line
  const [totalMembers , setTotalMembers] = useState(0);
  const [totalPages , setTotalPages] = useState(0);
  const getFarmers =async ()=>{
    try {
      const response = await axios.get("http://localhost:8080/api/farmer/",{
        headers: {
          "authorization" : `Bearer ${Cookies.get("jwt")}`
        }
      }
      );
      console.log(response);
      setMembers(response.data.farmers);
      setTotalMembers(response.data.farmers.length);
      setTotalPages(Math.ceil(response.data.farmers.length/membersPerPage));
      
    } catch (error) {
      console.log(error);
    }
  } 
  useEffect( ()=>{
    async function fetchData(){
      await getFarmers();
    }
    fetchData();
     
  },[])
  const handleClickNext = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handleClickBack = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  }; 

  return (
    <>
    <div>
        <div className="w-[700px] bg-transparentColor flex flex-row gap-2 ml-6">
      {Cookies.get("role") === "Admin" && (
    <div className="bg-white rounded-t-lg flex flex-row justify-center text-center mb-2 w-1/3 gap-7 p-4">
      <div className="text-primaryColor flex flex-row justify-center items-center font-semibold text-center ">
        Members
      </div>
      <div className="text-secondaryColor flex flex-row justify-center items-center font-semibold text-center">
        Admins
      </div>
    </div>

    )}

        </div>
      </div>
      <div className="w-full px-6 bg-transparentColor mt-2 mb-2 ml- flex flex-row justify-between ">
        {/* addnew export import filter */}
      <UserManagementBtns/>
      </div>
      <div className="flex flex-col bg-transparentColor rounded-t-2xl">
        {/* header */}
      <div className="flex justify-center items-center gap-2">
            <div className="py-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
            National ID
          </div>
           <div className="py-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
             Photo
           </div>
           <div className="py-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
             Member Name
           </div>
           <div className="py-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
             ID
           </div>
           <div className="py-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
            Seed
          </div>
          <div className="py-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
          Status
        </div>
       <div className="py-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
         Result
       </div>
       <div className="py-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5 rounded-tr-2xl">
          Operations
        </div>
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
                <div className="py-4 text-secondaryColor font-bold text-[14px] text-center w-1/5">
                  {member.nationalId}
                </div>
                <div className="py-4 text-center self-center flex justify-center w-1/5">
                <div className="w-8 h-8 overflow-hidden rounded-full">
                  <img
                    src={member.photo}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="py-4 text-center font-semibold text-[15px] w-1/5 text-secondaryColor">
                {member.name}
              </div>
                  <div className="py-4 text-center font-semibold text-[15px] w-1/5 text-secondaryColor">
                    {member.id}
                  </div>
                  <div className="py-4 text-center font-semibold text-[15px] w-1/5 text-secondaryColor">
                    Tomatoes
                  </div>
             
                  <div className="text-secondaryColor font-bold text-[14px] text-center w-1/5">
                <div
                  className={`text-sm p-2 font-normal rounded-md ${getStatusColor(
                    member.status
                  )}`}
                >
                  <span>{member.status}</span>
                </div>
              </div>
                  <div className="py-4 text-center font-semibold text-[15px] w-1/5 text-secondaryColor">
                    100%
                  </div>
                  <div className="py-4 flex items-center justify-center w-1/5">
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
                <button className="cursor-pointer font-semibold text-center py-1 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none">
                  From Map
                </button>
              </div>
                
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
  )
}
const getStatusColor = (status) => {
    switch (status) {
      
      case "banned":
        return "bg-banned-background text-banned-text";
      case "Available":
        return "bg-not-violated-background text-not-violated-text";
      default:
        return "bg-black text-white";
    }
  };
export default Assumption