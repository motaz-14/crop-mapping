import React, { useState, useEffect } from "react";
import { ReactComponent as UserAvatar } from "../assets/useravatar.svg";
import { HiOutlineBell, HiOutlineBellAlert } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { useLanguage } from "../LanguageContext";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [search, setSearch] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const { getText, language } = useLanguage(); // Import getText and language from the LanguageContext
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  console.log(search);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(currentTime);

  return (
    <header className="bg-background-main-screen">
      <div className="flex items-center justify-between p-4">
        {/* Username */}
        <div className="text-xl font-semibold w-[200px]">
          <div style={{ textAlign: language === "en" ? "left" : "right" }}>
            {getText("Hello, Mohamed Adel", "مرحبا، محمد عادل")}
          </div>
          <div
            style={{ textAlign: language === "en" ? "left" : "right" }}
            className="text-primaryColor text-sm"
          >
            {formattedTime}
          </div>
        </div>

        {/* Search Input */}
        <div className=" w-[460px] flex items-center justify-center bg-white text-start max-sm:mx-1 p-3 px-11 rounded-md">
          <CiSearch className="text-secondaryColor text-2xl" />
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
            id="searchInput"
            className="border-none focus:border-none focus:outline-none outline-none w-full bg-white max-w-md" // Set a max-width
          />
        </div>

        {/* Notification and Avatar */}
        <div className="w-[330px] flex items-center justify-end">
          {/* Notification*/}
          <div
            className="relative mr-7 cursor-pointer"
            onClick={toggleNotifications}
          >
            {showNotifications ? (
              <>
              <HiOutlineBell className="bg-white text-secondaryColor cursor-pointer" />
              <div className="absolute top-8 cursor-pointer right-0 bg-white shadow-md rounded-md p-2 w-80">
                <p
                  style={{ textAlign: language === "en" ? "left" : "right" }}
                >
                  {getText(
                    "I am a The first notif I am a notification I am a notification I am a notification",
                    "انا رسالة"
                  )}
                </p>
                <hr className="bg-secondaryColor" />
                <p
                  style={{ textAlign: language === "en" ? "left" : "right" }}
                >
                  {getText(
                    "I am a The first notif I am a notification I am a notification I am a notification",
                    "انا رسالة"
                  )}
                </p>
              </div>
            </>
              ) : (
              <HiOutlineBellAlert className="bg-white text-secondaryColor cursor-pointer" />
              
            )}

            <div className="h-2 w-2 bg-red-500 rounded-full absolute top-0 right-0"></div>
          </div>
          {/* Avatar in a Circle */}
          <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center">
            <UserAvatar />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
