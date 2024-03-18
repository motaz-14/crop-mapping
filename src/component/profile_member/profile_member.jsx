import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useLanguage } from "../../LanguageContext"; 
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import FromMapBtn from "../from_map/from-map-btn";

function ProfileMember() {
  const { getText } = useLanguage();
  const [member, setMember] = useState({nationalId : "" ,name:"",phoneNumber:"",status:"" });
  const { id } = useParams();
  const getUser = async ()=>{
   
    try {
      const response = await axios.get(`http://localhost:8080/api/farmer/${id}`, {
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });
    
      setMember(response.data.farmer);
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    async function fetchData() {
      await getUser();
    }
    fetchData();
  },)
  return (
    <>
      <div className="w-full h-1/3 flex flex-row bg-white rounded-2xl mb-2">
        <div className="flex flex-col items-start p-4 w-1/2">
        <div>
            <div className="flex flex-row items-center mb-1">
                <div className="p-2 text-center font-semibold text-[15px] text-primaryColor rounded-md">{getText("National ID", "الرقم القومي")} :</div>
                <div className="p-4 text-center font-semibold text-[15px] text-secondaryColor"> {member.nationalId}</div>
            </div>
            <div className="flex flex-row items-center mb-1">
                <div className="p-2 text-center font-semibold text-[15px] text-primaryColor rounded-md">{getText("Member Name", "اسم العضو")} :</div>
                <div className="p-4 text-center font-semibold text-[15px] text-secondaryColor"> {member.name}</div>
            </div>
            <div className="flex flex-row items-center mb-1">
                <div className="p-2 text-center font-semibold text-[15px] text-primaryColor rounded-md">{getText("Mobile Number", "رقم الهاتف")} :</div>
                <div className="p-4 text-center font-semibold text-[15px] text-secondaryColor">{member.phoneNumber}</div>
            </div>
            <div className="flex flex-row items-center">
                <div className="p-2 text-center font-semibold text-[15px] text-primaryColor rounded-md">{getText("Status", "الحالة")} :</div>
                <div className="p-4 text-center font-semibold text-[15px] text-secondaryColor">{member.status}</div>
            </div>
        </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
          <div className="py-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
          {getText("ID", "رقم العضو")}
          </div>
          <div className="py-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
            {getText("Seed", "البذور")}
          </div>
          <div className="py-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
            {getText("Status", "الحالة")}
          </div>
          <div className="py-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5">
            {getText("Result", "النتيجة")}
          </div>
          <div className="py-4 text-center font-semibold text-[15px] bg-primaryColor text-white w-1/5 rounded-tr-2xl">
            {getText("Operations", "العمليات")}
          </div>
        </div>
        <div
             
              className="flex justify-center items-center gap-2 bg-white mt-2 mb-2"
            >
              <div className="py-4 text-center font-semibold text-[15px] w-1/5 text-secondaryColor">
                ID
              </div>
              <div className="py-4 text-center font-semibold text-[15px] w-1/5 text-secondaryColor">
              Seed
              </div>
              <div className="text-secondaryColor font-bold text-[14px] text-center w-1/5">
                <div
                  className="text-sm p-2 font-normal rounded-md" 
                >
                  <span>Status</span>
                </div>
              </div>
              <div className="py-4 text-center font-semibold text-[15px] w-1/5 text-secondaryColor">
              Result
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
                <FromMapBtn id={member.id}/>
              </div>
            </div>
    </>
  );
}

export default ProfileMember;
