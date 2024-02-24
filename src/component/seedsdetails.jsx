import React from "react";
import { useState } from "react";
import seedsImage from "../assets/tomato.svg";
import { FiEdit } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiCalculator1 } from "react-icons/ci";
import Addbutton from "./addbutton";
import { Link } from "react-router-dom";

function SeedsDetails() {
  const seedes = [
    {
      id: 1,
      seedsimages: seedsImage,
      name: "Tomato",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    {
      id: 2,
      seedsimages: seedsImage,
      name: "Potato",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    {
      id: 3,
      seedsimages: seedsImage,
      name: "Tomato",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    {
      id: 4,
      seedsimages: seedsImage,
      name: "Tomato",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    {
      id: 5,
      seedsimages: seedsImage,
      name: "Tomato",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    {
      id: 6,
      seedsimages: seedsImage,
      name: "Tomato",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    {
      id: 7,
      seedsimages: seedsImage,
      name: "Tomato",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    {
      id: 8,
      seedsimages: seedsImage,
      name: "Tomato",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    {
      id: 9,
      seedsimages: seedsImage,
      name: "Tomato",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    {
      id: 10,
      seedsimages: seedsImage,
      name: "Tomato",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    {
      id: 11,
      seedsimages: seedsImage,
      name: "Tomato",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    {
      id: 12,
      seedsimages: seedsImage,
      name: "5ara",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    {
      id: 13,
      seedsimages: seedsImage,
      name: "5ara",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    {
      id: 14,
      seedsimages: seedsImage,
      name: "5ara",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    {
      id: 15,
      seedsimages: seedsImage,
      name: "5ara",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    {
      id: 16,
      seedsimages: seedsImage,
      name: "5ara",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },

    {
      id: 17,
      seedsimages: seedsImage,
      name: "5ara",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    {
      id: 18,
      seedsimages: seedsImage,
      name: "5ara",
      category: "Vegetable",
      fertilizer: "Nitrogen fertilizers",
      quan: "4.7 lb fertilizer per 1000 sq ft",
    },
    // Add more seedes as needed
  ];
  const seedesPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const totalseedes = seedes.length;
  const totalPages = Math.ceil(totalseedes / seedesPerPage);
  const [showDropdown, setShowDropdown] = useState(
    Array(seedesPerPage).fill(false)
  );

  const handleClickNext = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handleClickBack = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleToggleDropdown = (index) => {
    setShowDropdown((prevShowDropdown) => {
      const newShowDropdown = [...prevShowDropdown];
      newShowDropdown[index] = !newShowDropdown[index];
      return newShowDropdown;
    });
  };
  return (
    <>
      <div className="flex flex-row  justify-start items-center gap-3 ml-4 mb-3 mt-3">
        <div className="text-secondaryColor text-base font-semibold">
          Seed Details
        </div>
        <div>
          <Addbutton />
        </div>
        <div className="">
          <Link
          to={'fertilizer-calculator'}
            className="no-underline flex flex-row gap-2 font-semibold text-center py-3 px-4 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none"
          >
            <div>
              <CiCalculator1 size={17} />
            </div>
            <div className="text-sm">Fertilizer Calculator</div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col bg-transparentColor rounded-t-2xl">
        {/* header */}
        <div className="flex justify-center items-center gap-2">
          <div className="p-4 text-center font-semibold text-[13px] bg-transparentColor text-secondaryColor w-1/5">
            Seeds Details
          </div>
          <div className="p-4 text-center font-semibold text-[13px] bg-transparentColor text-secondaryColor w-1/5">
            Fertilizer
          </div>
          <div className="p-4 text-center font-semibold text-[13px] bg-transparentColor text-secondaryColor w-1/5">
            Fertilizer Quan
          </div>
          <div className="p-4 text-center font-semibold text-[13px] bg-transparentColor text-secondaryColor w-1/5">
            {/* edit */}
          </div>
        </div>
        {seedes
          .slice((currentPage - 1) * seedesPerPage, currentPage * seedesPerPage)
          .map((seede, index) => (
            <div
              key={seede.id}
              className="flex justify-center items-center gap-2 bg-white mt-2 mb-2 ml-4 rounded-lg"
            >
              <div className="p-4 text-center self-center flex justify-center gap-1 w-1/5">
                <input type="checkbox" className="cursor-pointer" />
                <div className="w-8 h-8 overflow-hidden rounded-full">
                  <img
                    src={seede.seedsimages}
                    alt="seedsimages"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-semibold text-[13px] bg-transparentColor text-secondaryColor">
                    {seede.name}
                  </div>
                  <div className="font-semibold text-[10px] bg-transparentColor text-secondaryColor">
                    {seede.category}
                  </div>
                </div>
              </div>

              <div className="p-4 text-center font-semibold text-[15px] w-1/5 text-breakColor">
                {seede.fertilizer}
              </div>

              <div className="p-4 text-center font-semibold text-[15px] w-1/5 text-banned-text">
                {seede.quan}
              </div>
              <div className="p-4 text-center w-1/5 relative">
                <button
                  className="cursor-pointer border-none outline-none px-2 py-1 rounded bg-transparentColor"
                  onClick={() => handleToggleDropdown(index)}
                >
                  <i className="text-primaryColor">
                    <FiEdit size={15} />
                  </i>
                </button>
                {showDropdown[index] && (
                  <div className="absolute left-[150px] top-0 bg-white p-4 border rounded text-start">
                    <div className="font-light text-[11px] cursor-pointer mb-2 text-secondaryColor flex flex-row gap-1 text-start justify-start">
                      <FiEdit />
                      Edit
                    </div>
                    <div className="font-light text-[11px] cursor-pointer mb-2 text-secondaryColor flex flex-row gap-1 text-start justify-start">
                      <FaRegTrashAlt />
                      Delete
                    </div>
                    <div className="font-light text-[11px] cursor-pointer text-secondaryColor flex flex-row gap-1 text-start justify-start">
                      <FaEye />
                      Preview
                    </div>
                  </div>
                )}
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
  );
}
export default SeedsDetails;
