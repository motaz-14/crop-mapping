import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";
import Card from "../component/card";
import Calendar from "../component/calender";
import MyChart from "../component/chart";
import BarChart from "./barchart";
import  MostSeeds  from "./mostseeds";

function MainContent() {
  //eslint-disable-next-line
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };
  return (
    <>
      {/* 1. Total Checks Cards and Calendar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {/* Card 1 */}
        <Card
          icon={GrAnnounce}
          styles="text-white text-2xl bg-[#FFD60A] p-4 rounded-[15px]"
          text="Total Checks"
          value="3,782 Times"
          description="7.2% More than last month"
        />
        {/* Card 2 */}
        <Card
          icon={FaCheck}
          styles="text-white text-2xl bg-[#01B68D] rounded-[15px] p-4"
          text="True"
          value="3,782 Times"
          description="7.2% More than last month"
        />
        {/* Card 3 */}
        <Card
          icon={BsXLg}
          styles="text-white text-2xl bg-[#D00000] rounded-[15px] p-4"
          text="False"
          value="3,782 Times"
          description="7.2% More than last month"
        />
        {/* 2. Calendar */}
        <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
      </div>
      {/* 2. Chart - True and False Analysis */}
      <div className="chart-container bg-white rounded ">
        <MyChart />
      </div>
      {/* 3. BarChart - Crop Statistics */}
      <div className="container mx-auto py-4">
      <div className="flex justify-between">
        <div className="w-full lg:w-3/4">
          <BarChart />
        </div>
        <div className="w-full lg:w-1/4 lg:ml-4">
          <MostSeeds />
        </div>
      </div>
    </div>
    </>
  );
}

export default MainContent;
