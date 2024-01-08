// SideBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { IoPersonSharp } from 'react-icons/io5';
import { CiSettings } from 'react-icons/ci';
import { IoIosLogOut } from 'react-icons/io';
import { TbSeeding } from 'react-icons/tb';
import { ReactComponent as AppLogo } from '../assets/applogo.svg';
import { useLanguage } from '../LanguageContext';

function SideBar() {
  const [activeLink, setActiveLink] = useState(null);
  const { toggleLanguage, getText } = useLanguage();
  const [language, setLanguage] = useState('en');

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  // Same as renderLink but with the ability to change the link text based on language
  const renderLink = (to, enText, arText, icon, index) => (
    <Link
      to={to}
      key={index}
      className={`${
        activeLink === index ? 'text-primaryColor' : 'text-secondaryColor'
      } no-underline block py-2 hover:bg-gray-700 hover:text-primaryColor`}
      onClick={() => handleLinkClick(index)}
    >
      <div className="flex flex-row justify-start gap-2 items-center">
        {React.cloneElement(icon, { className: 'w-6' })}
        {getText(enText, arText)}
      </div>
    </Link>
  );

  return (
    <div className="w-64 bg-white text-secondaryColor p-4">
      <div className="text-2xl font-bold gap-2 text-secondaryColor flex flex-row justify-center items-center">
        <AppLogo className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center" />
        Crop Var
      </div>
      <hr className="bg-secondaryColor w-3/4" />
      <nav className="mt-4 flex flex-col justify-center gap-1 pl-6">
        {renderLink('/dashboard', 'Dashboard', 'لوحة القيادة', <MdDashboard />, 0)}
        {renderLink('/dashboard', 'User Management', 'إدارة المستخدمين', <IoPersonSharp />, 1)}
        {renderLink('/dashboard', 'Seeds Details', 'تفاصيل البذور', <TbSeeding />, 2)}
        {renderLink('/dashboard', 'Settings', 'الإعدادات', <CiSettings />, 3)}
        {renderLink('/dashboard', 'Logout', 'تسجيل الخروج', <IoIosLogOut />, 4)}
      </nav>
      <div className="mt-4 ml-7">
        <button
          className="text-sm bg-primaryColor text-white px-3 py-1 rounded outline-none border-none cursor-pointer"
          onClick={() => {
            toggleLanguage();
            setLanguage(language === 'en' ? 'ar' : 'en');
          }}
        >
          {language === 'en' ? 'Change to Arabic' : 'تغيير إلى الإنجليزية'}
        </button>
      </div>
    </div>
  );
}

export default SideBar;
