import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function ProfileMember() {
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
      <div className="w-full h-1/2 flex flex-row bg-white rounded-2xl">
        <div className="flex flex-col items-start p-4 w-1/2">
        <div>
            <div className="flex flex-row items-center mb-1">
                <div className="p-2 text-center font-semibold text-[15px] text-primaryColor rounded-md">National ID :</div>
                <div className="p-4 text-center font-semibold text-[15px] text-secondaryColor"> {member.nationalId}</div>
            </div>
            <div className="flex flex-row items-center mb-1">
                <div className="p-2 text-center font-semibold text-[15px] text-primaryColor rounded-md">Member Name :</div>
                <div className="p-4 text-center font-semibold text-[15px] text-secondaryColor"> {member.name}</div>
            </div>
            <div className="flex flex-row items-center mb-1">
                <div className="p-2 text-center font-semibold text-[15px] text-primaryColor rounded-md">Mobile Number ID :</div>
                <div className="p-4 text-center font-semibold text-[15px] text-secondaryColor">{member.phoneNumber}</div>
            </div>
            <div className="flex flex-row items-center">
                <div className="p-2 text-center font-semibold text-[15px] text-primaryColor rounded-md">Status :</div>
                <div className="p-4 text-center font-semibold text-[15px] text-secondaryColor">{member.status}</div>
            </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default ProfileMember;
