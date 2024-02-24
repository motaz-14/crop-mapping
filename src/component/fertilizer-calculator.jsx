import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import fBag from "../assets/fertilizer-bag.svg";
function FertilizerCalculator() {
  return (
    <>
      <div className="flex flex-col  justify-start gap-3 ml-4 mb-3 mt-3">
        <div className="flex justify-start items-center mt-2 mb-2">
          <Link
            to="/dashboard/seeds-details"
            className="no-underline flex flex-row gap-2 font-semibold text-center py-3 px-4 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none"
          >
            <div>
              <FaArrowLeftLong size={17} />
            </div>
            <div className="text-sm">Back</div>
          </Link>
          <span className="mx-4 text-secondaryColor">
            Fertilizer Calculator
          </span>
          <Link className="cursor-pointer no-underline font-semibold text-center p-2 px-10 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none">
            <div></div>
            <div className="text-sm">Seeds</div>
          </Link>
        </div>
        <div className="w-full">
          <div className="bg-white w-2/5 p-4 flex flex-col gap-4">
            <div className="gap-3 flex flex-row items-center">
              <span className="bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white font-semibold p-3 rounded-md">
                1
              </span>
              <span className="text-secondaryColor font-medium">
                Choose Fertilizer Type:
              </span>
            </div>
            <div>
              <div className="flex flex-row justify-around">
                <div className="bg-[#F5F5F5] cursor-pointer w-1/4 rounded-md flex justify-center items-center p-4 hover:border-primaryColor hover:border-2">
                  <img src={fBag} alt="#" width={"110px"} height={"110px"} />
                </div>
                <div className="bg-[#F5F5F5]  cursor-pointer w-1/4 rounded-md border-primaryColor border-8 flex justify-center items-center p-4 ">
                  <img src={fBag} alt="#" width={"110px"} height={"110px"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FertilizerCalculator;
