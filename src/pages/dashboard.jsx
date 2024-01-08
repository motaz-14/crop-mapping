// Dashboard.js
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";
import SideBar from "../component/sidebar";
import Navbar from "../component/navbar";
import Card from "../component/card";
import Chart from "../component/chart";
import Histogram from "../component/histogram";
import Calendar from "react-calendar"; // Import the Calendar component
import "react-calendar/dist/Calendar.css"; // Import the Calendar CSS

function Dashboard() {
  const [date, setDate] = useState(new Date()); 
  // State to manage the selected date

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // You can add any additional logic you need when the date changes
  };

  return (
    <>
      <div className="flex h-screen bg-background-main-screen ">
        <SideBar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <div className="flex-1 overflow-x-hidden overflow-y-auto p-4">
            {/* 1. Total Checks Cards */}
            <div className="grid grid-cols-4 gap-1 mb-8">
              {/* Card 1 */}
              <Card
                icon={GrAnnounce}
                styles="text-white text-2xl bg-[#FFD60A] p-4"
                text="Total Checks"
                value="3,782 1times"
                description="7.2% More than last month"
              />
              <Card
                icon={FaCheck}
                styles="text-white text-2xl bg-[#01B68D] p-4"
                text="True"
                value="3,782 times"
                description="7.2% More than last month"
              />
              <Card
                icon={BsXLg}
                styles="text-white text-2xl bg-[#D00000] p-4"
                text="False"
                value="3,782 times"
                description="7.2% More than last month"
              />
              {/* 2. Calendar */}
              <div className="bg-white p-4 rounded shadow mb-8 w-[270px] h-[200px]">
                <Calendar onChange={handleDateChange} value={date}  className={"w-2/3  h-2/3"}/>
              </div>
            </div>

            {/* 3. Chart - True and False Analysis */}
            <div className="bg-white p-4 rounded shadow mb-8">
              <h2 className="text-xl font-bold mb-4">Seeds Check Overview</h2>
              {/* <Chart /> */}
            </div>

            {/* 4. Histogram - Crop Statistics */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Crop Statistics</h2>
              {/* <Histogram /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
