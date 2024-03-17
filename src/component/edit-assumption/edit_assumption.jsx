import { useLanguage } from "../../LanguageContext"; 
import { CiExport } from 'react-icons/ci';

function EditAssumption() {
    const { getText } = useLanguage();
    return (
        <>
            <div className="flex flex-row items-center w-11/12 h-1/2 bg-white rounded-2xl">
              <div className="w-1/2 flex flex-col">
                <h2 className="text-secondaryColor font-bold m-5">{getText("Edit Assumption", "تعديل افتراض")}</h2>
                <div className="flex flex-row gap-2">
                  <div className="p-4 rounded-lg">
                    <div class="relative">
                      <input
                        type="text"
                        id="national-id"
                        name="national-id"
                        className=" bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent px-2 ring-secondaryColor focus:outline-none border border-secondaryColor focus:border-secondaryColor"
                        placeholder=""
                      />
                      <label
                        for="national-id"
                        className="absolute cursor-text left-0 -top-3 text-sm text-secondaryColor bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                      >
                        {getText("National ID", "الهوية الوطنية")}
    
                      </label>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg">
                    <div class="relative">
                      <input
                      
                        type="text"
                        id="member-name"
                        name="member-name"
                        className=" bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent px-2 ring-white focus:outline-none border border-[#666666] focus:border-[#666666]"
                        placeholder=""
                      />
                      <label
                        for="member-name"
                        className="absolute cursor-text left-0 -top-3 text-sm text-secondaryColor bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                      >
                        {getText("Member Name", "اسم عضو")}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <div className="p-4 rounded-lg">
                    <div class="relative">
                      <input
                        type="text"
                        id="seed"
                        name="seed"
                        className=" bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent px-2 ring-white focus:outline-none border border-[#666666] focus:border-[#666666]"
                        placeholder=""
                      />
                      <label
                        for="seed"
                        className="absolute cursor-text left-0 -top-3 text-sm text-secondaryColor bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                      >
                        {getText("Seed", "بذرة")}
                      </label>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg">
                    <div class="relative">
                      <input
                        type="text"
                        id="Result"
                        name="Result"
                        className="bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent px-2 ring-white focus:outline-none border border-[#666666] focus:border-[#666666]"
                        placeholder=""
                      />
                      <label
                        for="Result"
                        className="absolute cursor-text left-0 -top-3 text-sm text-secondaryColor bg-white mx-1 px-1peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                      >
                       {getText("Result", "نتيجة")}
                      </label>
                    </div>
                  </div>  
                </div>
                <div className="flex flex-row gap-2 m-4 mt-6">
                  <div>
                    <button className="cursor-pointer flex flex-row gap-2 justify-center items-center font-semibold text-center py-2 px-4 bg-primaryColor text-white rounded-lg outline-none border-primaryColor border">
                      <div>
                        <CiExport size={14} />
                      </div>
                      <div>{getText("Upload Farmer Card", "تحميل بطاقة المزارع")}</div>
                    </button>
                  </div>
                  <div>
                    <button className="cursor-pointer flex flex-row gap-2 justify-center items-center font-semibold text-center py-2 px-4 bg-primaryColor text-white  rounded-lg outline-none border-primaryColor border">
                      <div>
                        <CiExport size={14} />
                      </div>
                      <div>{getText("Upload photo", "حمل الصورة")}</div>
                    </button>
                  </div>
                  <button
                     className="cursor-pointer font-semibold text-center w-28 py-2 bg-primaryColor text-white rounded-2xl outline-none border-none">
                      <div>{getText("Save", "حفظ")}</div>
                    </button>
                </div>
              </div>
              
            </div>
        </>
      );
}

export default EditAssumption