import React from 'react';
import { CiExport, CiImport, CiFilter } from 'react-icons/ci';
import AddButton from '../addbutton';
import { useLanguage } from '../../LanguageContext'; // Import the useLanguage hook from your LanguageContext
import * as XLSX from 'xlsx';

function UserManagementBtns(props) {
  console.log(props);
  const { getText } = useLanguage(); // Get the getText function from the LanguageContext
  const exportToExcel = () => {
    let headers;
    let data 
    if (props.members){
      
     headers = [
      "National ID",
      "Photo",
      "Member Name",
      "Mobile Number",
      "Status"
    ];
     data = props.members.map(member => [
      member.nationalId,
      member.photo,
      member.name,
      member.phoneNumber,
      member.status
    ]);
  
    }else if (props.assumptions){
      headers = [
        "National ID",
        "Photo",
        "Member Name",
        "Seed",
        "Status",
        "Result"
      ];
      data = props.assumptions.map(assumption =>[
        assumption.farmer.nationalId,
        assumption.farmer.photo,
        assumption.farmer.name,
        assumption.farmerAssumption.name,
        assumption.status,
        assumption.plantId_ai
      ]);

    }else {
      return ;
    }
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, worksheet, "Members");
    if (props.assumptions){
      XLSX.writeFile(wb, 'assumptions.xlsx');
    }
    else if (props.members){
      XLSX.writeFile(wb, 'members.xlsx');
    }else {
      XLSX.writeFile(wb, 'plants.xlsx');
    }
  };
  return (
    <>
      <div className="flex flex-row gap-8">
        <AddButton />
        <div>
          <button onClick={exportToExcel}
            className="cursor-pointer flex flex-row gap-2 justify-center items-center font-semibold text-center py-2 px-4 bg-transparentColor text-primaryColor rounded-lg outline-none border-primaryColor border"
          >
            <div>
              <CiImport size={14} />
            </div>
            <div>{getText('Export Members', 'تصدير الأعضاء')}</div> {/* Translate "Export Members" */}
          </button>
        </div>
      </div>
      <div className="flex flex-row px-8 justify-center">
        <button
          className="cursor-pointer flex flex-row justify-center items-center gap-2 font-semibold text-center py-3 px-4 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none"
        >
          <div>
            <CiFilter size={14} />
          </div>
          <div>{getText('Filters', 'الفلاتر')}</div> {/* Translate "Filters" */}
        </button>
      </div>
    </>
  );
}

export default UserManagementBtns;
