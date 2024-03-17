import React from 'react';
import { CiExport, CiImport, CiFilter } from 'react-icons/ci';
import AddButton from '../addbutton';
import { useLanguage } from '../../LanguageContext'; // Import the useLanguage hook from your LanguageContext

function UserManagementBtns() {
  const { getText } = useLanguage(); // Get the getText function from the LanguageContext

  return (
    <>
      <div className="flex flex-row gap-8">
        <AddButton />
        <div>
          <button
            className="cursor-pointer flex flex-row gap-2 justify-center items-center font-semibold text-center py-2 px-4 bg-transparentColor text-primaryColor rounded-lg outline-none border-primaryColor border"
          >
            <div>
              <CiExport size={14} />
            </div>
            <div>{getText('Import Members', 'استيراد الأعضاء')}</div> {/* Translate "Import Members" */}
          </button>
        </div>
        <div>
          <button
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
