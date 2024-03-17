import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import axios from "axios";
import Cookies from "js-cookie";

function NewAssumption() {
  const [selectedSeed, setSelectedSeed] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [status, setStatus] = useState("pending");  
  const [members,setMembers] = useState([]);
  const [seeds,setSeeds] = useState([]);
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  const handleSave = async ()=>{
    try {
      const response = await axios.post("http://localhost:8080/api/assumption/",{
        startDate:selectedDate,
        plantId:selectedSeed,
        farmerId:selectedMember,
        latlungs:latlungs
      }, {
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });
      if (response.status === 201){
        alert("Created");
      }
     
    
    } catch (error) {
      console.log(error);
    }
  }
  const getFarmers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/farmer/", {
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });
      console.log(response);
      setMembers(response.data.farmers);
    
    } catch (error) {
      console.log(error);
    }
  };
  const getSeeds = async ()=>{
    try {
      const response = await axios.get("http://localhost:8080/api/plant",{
        headers:{
          "authorization" : `Bearer ${Cookies.get("jwt")}`
        }
      });
      setSeeds(response.data.plants);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    async function fetchData() {
      await getFarmers();
      await getSeeds();
    }
    fetchData();
  },[])
  const handleSeedSelect = (seed) => {
    setSelectedSeed(seed);
  };
  const handleMemberSelect = (member) => {
    setSelectedMember(member);
  };
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };
  // eslint-disable-next-line
  const [selectedArea, setSelectedArea] = useState([]);
  // eslint-disable-next-line
  const [latlungs,setLatlungs] = useState([]);
 
  const handleSelection = (e) => {
    const bounds = e.layer.getBounds();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    setLatlungs(e.layer._latlngs[0]);
    setSelectedArea([[ne.lat, ne.lng], [sw.lat, sw.lng]]); 
  };
  const clearSelection = () => {
    setLatlungs([]);
    setSelectedArea([]);
  };
 
  return (
    <>
        <div className="flex flex-row items-center w-11/12 h-3/4 bg-white rounded-2xl">
        <div className="w-2/3 h-4/5 flex flex-col pl-2 gap-5">
        <MapContainer center={[30.176613488664007, 31.664954709701263]} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=9270635570mshce84b9ebfa3a04ep1de683jsnc813f569c7e2"
        />
        <FeatureGroup>
          <EditControl
            
            position='topright'
            onCreated={(e) => {
              handleSelection(e);
            }}
            onDeleted={()=>{
              clearSelection();
            }}
            
            draw={{
              rectangle: true,
              circle: false,
              circlemarker: false,
              marker: false,
              polyline:false

            }}
          />
        </FeatureGroup>
      </MapContainer>
      <div>
      <select
                value={selectedMember || ''}
                onChange={(e) => handleMemberSelect(e.target.value)}
                className="inline-flex justify-center items-center w-full px-4 py-2 bg-[#EAE8E8] text-sm font-medium text-secondaryColor rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="" disabled>
                  Select a member
                </option>
                {members.map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.name}  {member.nationalId}
                  </option>
                ))}
              </select>
      </div>
        </div>
        
          <div className="h-auto w-2/5 pl-2 flex justify-center flex-col">

            <div className="flex w-full flex-col justify-center items-center gap-5">

            <div className="flex w-full justify-center">
              <span className="text-secondaryColor">Status :</span>
            </div>

            <div className="">
              <select
                value={selectedSeed || ''}
                onChange={(e) => handleSeedSelect(e.target.value)}
                className="inline-flex justify-center items-center w-full px-4 py-2 bg-[#EAE8E8] text-sm font-medium text-secondaryColor rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="" disabled>
                  Select a seed
                </option>
                {seeds.map((seed) => (
                  <option key={seed.id} value={seed.id}>
                    {seed.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="">
              <div className="flex flex-row gap-5">
                <div className="flex justify-center items-center text-center">
                  <input id="pending" type="radio"
                    checked={status === "pending"}
                    onChange={() => handleStatusChange("pending")}
                  />
                  <label className="text-secondaryColor text-sm" htmlFor="pending">Pending</label>
                </div>
                <div className="flex justify-center">
                  <input id="true" type="radio"
                    checked={status === "true"}
                    onChange={() => handleStatusChange("true")}
                  />
                  <label className="text-secondaryColor text-sm" htmlFor="true">True</label>
                </div>
                <div className="flex justify-center">
                  <input
                    checked={status === "false"}
                    onChange={() => handleStatusChange("false")}
                    id="false" type="radio"
                  />
                  <label className="text-secondaryColor text-sm" htmlFor="false">False</label>
                </div>
              </div>
            </div>
            
            </div>
            <div className="flex justify-center items-center text-center mt-5">
              <label>Select a date:</label>
              <input type="date" value={selectedDate} onChange={handleDateChange} />
            </div>
            
            <div className="flex w-full mt-32 items-center justify-center">
              <button onClick={handleSave} className="cursor-pointer items-center font-semibold text-center w-28 py-2 bg-primaryColor text-white rounded-2xl outline-none border-none">
                Save
              </button>
            </div>

          </div>
        </div>
    </>
  );

}

export default NewAssumption;
