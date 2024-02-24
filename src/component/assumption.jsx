import { useState } from "react";
import { CiExport } from "react-icons/ci";

function Assumption({ closeModal }) {
    const [selectedSeed, setSelectedSeed] = useState(null);
    const [status, setStatus] = useState("pending");

    const seeds = ["Seed 1", "Seed 2"];

    const handleSeedSelect = (seed) => {
    setSelectedSeed(seed);
  };
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };
  return (
    <>
      <div className="inset-0 fixed bg-transparentColor backdrop-blur-sm flex items-center justify-center">
        <div className="flex flex-row items-center w-2/3 h-2/3 bg-white rounded-2xl">
          <div className="w-1/2 flex flex-col">
            <h2 className="text-secondaryColor font-bold ml-5">Add New Assumption </h2>
            <div className="flex flex-row gap-2">
              <div className="p-4 rounded-lg">
                <div class="relative">
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent px-2 ring-secondaryColor focus:outline-none border border-secondaryColor focus:border-secondaryColor"
                    placeholder=""
                  />
                  <label
                    for="first-name"
                    className="absolute cursor-text left-0 -top-3 text-sm text-secondaryColor bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    First Name
                  </label>
                </div>
              </div>
              <div className="p-4 rounded-lg">
                <div class="relative">
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent px-2 ring-white focus:outline-none border border-[#666666] focus:border-[#666666]"
                    placeholder=""
                  />
                  <label
                    for="last-name"
                    className="absolute cursor-text left-0 -top-3 text-sm text-secondaryColor bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Last Name
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="p-4 rounded-lg">
                <div class="relative">
                  <input
                    type="text"
                    id="nation-id"
                    name="nation-id"
                    className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent px-2 ring-white focus:outline-none border border-[#666666] focus:border-[#666666]"
                    placeholder=""
                  />
                  <label
                    for="nation-id"
                    className="absolute cursor-text left-0 -top-3 text-sm text-secondaryColor bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Nation ID
                  </label>
                </div>
              </div>
              <div className="p-4 rounded-lg">
                <div class="relative">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent px-2 ring-white focus:outline-none border border-[#666666] focus:border-[#666666]"
                    placeholder=""
                  />
                  <label
                    for="address"
                    className="absolute cursor-text left-0 -top-3 text-sm text-secondaryColor bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Address
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="p-4 rounded-lg">
                <div class="relative">
                  <input
                    type="text"
                    id="mobile-number"
                    name="mobile-number"
                    className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent px-2 ring-white focus:outline-none border border-[#666666] focus:border-[#666666]"
                    placeholder=""
                  />
                  <label
                    for="mobile-number"
                    className="absolute cursor-text left-0 -top-3 text-sm text-secondaryColor bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Mobile Number
                  </label>
                </div>
              </div>
              <div className="p-4 rounded-lg">
                <div class="relative">
                  <input
                    type="text"
                    id="farm-location"
                    name="farm-location"
                    className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent px-2 ring-white focus:outline-none border border-[#666666] focus:border-[#666666]"
                    placeholder=""
                  />
                  <label
                    for="farm-location"
                    className="absolute cursor-text left-0 -top-3 text-sm text-secondaryColor bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Farm Location
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 ml-4 mt-6">
              <div>
                <button className="cursor-pointer flex flex-row gap-2 justify-center items-center font-semibold text-center py-2 px-4 bg-primaryColor text-white rounded-lg outline-none border-primaryColor border">
                  <div>
                    <CiExport size={14} />
                  </div>
                  <div>Upload Farmer Card</div>
                </button>
              </div>
              <div>
                <button className="cursor-pointer flex flex-row gap-2 justify-center items-center font-semibold text-center py-2 px-4 bg-primaryColor text-white  rounded-lg outline-none border-primaryColor border">
                  <div>
                    <CiExport size={14} />
                  </div>
                  <div>Upload photo</div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 relative h-5/6">
            <div className="absolute inset-y-36 right-24">
            <select
  value={selectedSeed || ''}
  onChange={(e) => handleSeedSelect(e.target.value)}
  className="inline-flex justify-center items-center w-full px-4 py-2 bg-[#EAE8E8] text-sm font-medium text-secondaryColor rounded-md focus:outline-none focus:ring focus:border-blue-300"
>
  <option value="" disabled>
    Select a seed
  </option>
  {seeds.map((seed) => (
    <option key={seed} value={seed}>
      {seed}
    </option>
  ))}
</select>
            </div>
            <div className="absolute inset-y-52 left-[225px] ">
            <span className="text-secondaryColor">Status :</span>
            </div>
            <div className="absolute inset-y-60 right-14">
            <div className="flex flex-row gap-5">
            <div className="flex justify-center items-center text-center">
                <div>
                <input id="pending" type="radio"
                checked={status === "pending"}
                onChange={() => handleStatusChange("pending")}
                />
                </div>
                <div>
                <label className="text-secondaryColor text-sm" htmlFor="pending">Pending</label>
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                <input id="true" type="radio"
                checked={status === "true"}
                onChange={() => handleStatusChange("true")}
                />
                </div>
                <div>
                <label className="text-secondaryColor text-sm" htmlFor="true">True</label>
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                <input
                 checked={status === "false"}
                 onChange={() => handleStatusChange("false")}
                id="false" type="radio"/>
                </div>
                <div>
                <label className="text-secondaryColor text-sm" htmlFor="false">False</label>
                </div>
            </div>
            </div>
            </div>
            <div className="absolute bottom-0 right-10 flex flex-row gap-3 mt-6 w-full items-end justify-end">
              <div>
                <button className="cursor-pointer items-center font-semibold text-center w-28 py-2 bg-primaryColor text-white rounded-2xl outline-none border-none">
                  <div>Save</div>
                </button>
              </div>
              <div>
                <button
                  onClick={() => closeModal(false)}
                  className="cursor-pointer items-center font-semibold text-center w-28 py-2 bg-transparentColor text-primaryColor rounded-2xl outline-none border-primaryColor border"
                >
                  <div>Cancel</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default Assumption