import { useEffect, useState } from "react";
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
import axios from "axios";
import Cookies from "js-cookie";

function MainContent() {
   // eslint-disable-next-line 
   const [trueChecks,setTrue] = useState(0);
   const [falseChecks,setFalse] = useState(0);
   const [totalChecks,setTotal] = useState(0);
   const [groupTrue,setGroupTrue] = useState(0);
   const [groupFalse,setGroupFalse] = useState(0);
   const getTopData = async ()=>{
  try {
    const response = await axios.get("http://localhost:8080/api/analytics/top",{
      headers: {
        authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    });
    console.log(response);
    setFalse(response.data.false);
    setTotal(response.data.totalChecks);
    setTrue(response.data.true);
    setGroupFalse(response.data.groupedFalseAssumptionsByMonth);
    setGroupTrue(response.data.groupedTrueAssumptionsByMonth);
    } catch (error) {
      console.log(error);
    }
  }
  

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
  useEffect(()=>{
    async function fetchData() {
      await getTopData();
      
    }
    fetchData();
  },[]);
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
          value={totalChecks}
          description={""}
        />

        {/* Card 2 */}
        <Card
          icon={FaCheck}
          styles="text-white text-2xl bg-[#01B68D] rounded-2xl p-4"
          text={getText("True", "صح")}
          value={trueChecks}
          description={""}
        />
        {/* Card 3 */}
        <Card
          icon={BsXLg}
          styles="text-white text-2xl bg-[#D00000] rounded-2xl p-4"
          text={getText("False", "غلط")}
          value={falseChecks}
          description={""}
        />
        {/* 2. Calendar */}
        <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
      </div>
      {/* 2. Chart - True and False Analysis */}
      <div className="chart-container bg-white rounded-2xl w-full">
        <MyChart props={[groupFalse , groupTrue]} />
      </div>
      {/* 3. BarChart - Crop Statistics */}
      <div className="container mx-auto py-4">
        <div className="flex justify-between">
          <div className="w-full bg-white p-2 rounded-2xl flex flex-col gap-5">
            <label className="font-[Spartan] font-bold text-[20px] text-secondaryColor ml-9">
            {getText("Crop Statistics", "إحصائيات المحصول")}
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
          <div className="w-full h-24">
            <MostSeeds  />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
