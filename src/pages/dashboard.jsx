import WebFont from "webfontloader";
import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ReactComponent as LocationIcon } from "../assets/locationicon.svg";
import SideBar from "../component/sidebar";
import Navbar from "../component/navbar";
import MainContent from "../component/dashboard_main_content/maincontent";
import UserManagement from "../component/user_management/user-management";
import SeedsDetails from "../component/seeds_details/seedsdetails";
import FertilizerCalculator from "../component/fertilizer_calculator/fertilizer-calculator";
import MapComponent from "../component/map";
import Cookies from "js-cookie";

function Dashboard() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Spartan:100,200,300,400,500,600,700,800,900"],
      },
    });
  }, []);
  useEffect(() => {
    const token = Cookies.get('jwt');

    if (!token) {
      window.location.href = '/'; 
    }
  }, []);

  return (
    <>
      <div className="flex h-screen bg-background-main-screen gap-2">
        <SideBar />
        <div className="flex-1 flex flex-col pr-5 overflow-y-auto overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/*" element={<MainContent />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="seeds-details" element={<SeedsDetails />} />
            <Route path="seeds-details/fertilizer-calculator" element={<FertilizerCalculator />} />
            <Route path="map" element={<MapComponent/>} />
          </Routes>
        </div>
        <Link
        to="map"
        className="fixed bottom-4 items-center right-4 w-16 h-16 rounded-full cursor-pointer bg-gradient-to-r from-[#01E5B2] to-[#01B68D] border-none outline-none">
          <div className="w-full h-[90%] flex justify-center items-center content-center">
          <LocationIcon className="w-7 h-7" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Dashboard;
