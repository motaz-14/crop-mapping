import WebFont from "webfontloader";
import Cookies from "js-cookie";
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
import Member from "../component/member/member";
import NewAssumption from "../component/add_new_assumption/assumption";
import Assumption from "../component/assumption_page/assumptionPage";
import ProfileMember from "../component/profile_member/profile_member";
import { useLanguage } from "../LanguageContext";

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
  const { language } = useLanguage(); // Import getText and language from the LanguageContext

  useEffect(() => {
    document.body.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <>
      <div className="flex h-screen bg-background-main-screen gap-2">
     <SideBar />
        <div className={`flex-1 flex flex-col ${language === 'ar' ? 'pl-5' : 'pr-5'} overflow-y-auto overflow-x-hidden`}>
          <Navbar />
          <Routes>
            <Route path="/*" element={<MainContent />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="seeds-details" element={<SeedsDetails />} />
            <Route path="assumption" element={<Assumption/>} />
            <Route path="map" element={<MapComponent/>} />
            <Route path="user-management/profile-member/:id" element={<ProfileMember/>}/>
            <Route path="user-management/member" element={<Member/>} />
            <Route path="seeds-details/fertilizer-calculator" element={<FertilizerCalculator />} />
            <Route path="assumption/create-assumption" element={<NewAssumption/>} />
          </Routes>
        </div>
        <Link
          to="map"
          className="fixed bottom-4 items-center right-4 w-16 h-16 rounded-full cursor-pointer bg-gradient-to-r from-[#01E5B2] to-[#01B68D] border-none outline-none"
        >
          <div className="w-full h-[90%] flex justify-center items-center content-center">
            <LocationIcon className="w-7 h-7" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Dashboard;
