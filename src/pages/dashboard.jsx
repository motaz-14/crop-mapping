import WebFont from 'webfontloader';
import { useEffect } from "react";
import SideBar from "../component/sidebar";
import Navbar from "../component/navbar";
import MainContent from "../component/maincontent";
import UserManagement from '../component/user-management';
import { Routes, Route } from 'react-router-dom';
import { ReactComponent as LocationIcon } from '../assets/locationicon.svg';

function Dashboard() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Spartan:100,200,300,400,500,600,700,800,900'],
      },
    });
  }, []);

  return (
    <>
      <div className="flex h-screen bg-background-main-screen gap-2">
        <SideBar />
        <div className="flex-1 flex flex-col pr-5 overflow-y-auto overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path='/*' element={<MainContent />} />
            <Route path="user-management" element={<UserManagement />} />
          </Routes>
        </div>
        <button className="fixed bottom-4 right-4 w-16 h-16 rounded-full cursor-pointer bg-gradient-to-r from-[#01E5B2] to-[#01B68D] border-none outline-none">
          <LocationIcon className="w-7 h-7" />
        </button>
      </div>
    </>
  );
}

export default Dashboard;
