// Dashboard.js
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { BsXLg } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";
import SideBar from '../component/sidebar';
import Navbar from '../component/navbar';
import Card from '../component/card';
import Chart from '../component/chart';
import Histogram from '../component/histogram';
import Calendar from '../component/calendar';

function Dashboard() {
  return (
    <>
      <div className="flex h-screen bg-background-main-screen ">
        <SideBar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <div className="flex-1 overflow-x-hidden overflow-y-auto p-4">
            {/* 1. Total Checks Cards */}
            <div className="grid grid-cols-4 gap-14 mb-4">
              {/* Card 1 */}
              <Card icon={GrAnnounce} styles="text-white text-2xl bg-[#FFD60A] p-4" text="Total Checks" value="3,782 1times" description="7.2% More than last month" />
              <Card icon={FaCheck} styles="text-white text-2xl bg-[#01B68D] p-4" text="True" value="3,782 times" description="7.2% More than last month" />
              <Card icon={BsXLg} styles="text-white text-2xl bg-[#D00000] p-4" text="False" value="3,782 times" description="7.2% More than last month" />
              {/* Add three more similar cards */}
            </div>

            {/* 2. Calendar */}
            <Calendar />

            {/* 3. Chart - True and False Analysis */}
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Seeds Check Overview</h2>
              {/* <Chart /> */}
            </div>

            {/* 4. Histogram - Crop Statistics */}
            <div>
              <h2 className="text-xl font-bold mb-2">Crop Statistics</h2>
              {/* <Histogram /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
