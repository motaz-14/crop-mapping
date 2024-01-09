import SideBar from "../component/sidebar";
import Navbar from "../component/navbar";
import MainContent from "../component/maincontent";

function Dashboard() {
 
  return (
    <>
      <div className="flex h-screen bg-background-main-screen ">
        <SideBar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <div className="flex-1 overflow-x-hidden overflow-y-auto p-4">
           <MainContent/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
