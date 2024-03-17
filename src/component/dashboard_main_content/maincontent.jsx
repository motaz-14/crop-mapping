import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";
import Calendar from "./calender";
import MyChart from "./chart";
import MostSeeds from "./mostseeds";
import { useLanguage } from "../../LanguageContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import Card from "./card";

function MainContent() {
   // eslint-disable-next-line 
  const { getText, language } = useLanguage(); // Import getText and language from the LanguageContext
  const barChartData = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 30 },
    { name: "Mar", value: 30 },
    { name: "Apr", value: 30 },
    { name: "May", value: 30 },
    { name: "Jun", value: 30 },
    { name: "Jul", value: 30 },
    { name: "Aug", value: 30 },
    { name: "Sep", value: 30 },
    { name: "Oct", value: 30 },
    { name: "Nov", value: 30 },
    { name: "Dec", value: 30 },
  ];
  //eslint-disable-next-line
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };
  return (
    <>
      {/* 1. Total Checks Cards and Calendar */}
      <div className="flex flex-row gap-3 mb-3">
        {/* Card 1 */}
        <Card
          icon={GrAnnounce}
          styles="text-white text-2xl bg-[#FFD60A] p-4 rounded-2xl"
          text={getText("Total Checks", "مجموع ")}
          value={getText("3,782 Times", "3,782 عدد")}
          description={getText("7.2% More than last month", "اكثر من الشهر الفات")}
        />

        {/* Card 2 */}
        <Card
          icon={FaCheck}
          styles="text-white text-2xl bg-[#01B68D] rounded-2xl p-4"
          text={getText("True", "صح")}
          value={getText("3,782 Times", "3,782 عدد")}
          description={getText("7.2% More than last month", "اكثر من الشهر الفات")}
        />
        {/* Card 3 */}
        <Card
          icon={BsXLg}
          styles="text-white text-2xl bg-[#D00000] rounded-2xl p-4"
          text={getText("False", "غلط")}
          value={getText("3,782 Times", "3,782 عدد")}
          description={getText("7.2% More than last month", "اكثر من الشهر الفات")}
        />
        {/* 2. Calendar */}
        <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
      </div>
      {/* 2. Chart - True and False Analysis */}
      <div className="chart-container bg-white rounded-2xl w-full">
        <MyChart />
      </div>
      {/* 3. BarChart - Crop Statistics */}
      <div className="container mx-auto py-4">
        <div className="flex justify-between">
          <div className="w-full lg:w-3/4 bg-white p-5 rounded-2xl flex flex-col gap-5">
            <label className="font-[Spartan] font-bold text-[20px] text-secondaryColor ml-9">
              Crop Statistics
            </label>
            <BarChart width={900} height={300} data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#01B68D" barSize={30} />
            </BarChart>
          </div>
          <div className="w-full h-24 lg:w-1/4 lg:ml-4">
            <MostSeeds />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
