import React from "react";

function ProfileMember() {
  return (
    <>
      <div className="w-full h-1/2 flex flex-row bg-white rounded-2xl">
        <div className="flex flex-col items-start p-4 w-1/2">
        <div>
            <div className="flex flex-row items-center mb-1">
                <div className="p-2 text-center font-semibold text-[15px] text-primaryColor rounded-md">National ID :</div>
                <div className="p-4 text-center font-semibold text-[15px] text-secondaryColor">0165416546651</div>
            </div>
            <div className="flex flex-row items-center mb-1">
                <div className="p-2 text-center font-semibold text-[15px] text-primaryColor rounded-md">Member Name :</div>
                <div className="p-4 text-center font-semibold text-[15px] text-secondaryColor">seka aaaa</div>
            </div>
            <div className="flex flex-row items-center mb-1">
                <div className="p-2 text-center font-semibold text-[15px] text-primaryColor rounded-md">Mobile Number ID :</div>
                <div className="p-4 text-center font-semibold text-[15px] text-secondaryColor">011141465561</div>
            </div>
            <div className="flex flex-row items-center">
                <div className="p-2 text-center font-semibold text-[15px] text-primaryColor rounded-md">Status :</div>
                <div className="p-4 text-center font-semibold text-[15px] text-secondaryColor">Available</div>
            </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default ProfileMember;
