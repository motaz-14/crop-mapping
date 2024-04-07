import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import axios from 'axios';
import Cookies from 'js-cookie';

const MapComponent = () => {
  const [selectedArea, setSelectedArea] = useState([]);
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


  const sendLocation = async () => {
    if (latlungs.length > 0) {
      console.log(latlungs);
      try {
        const response  = await axios.post("http://localhost:8080/api/prediction/",{
          points : latlungs
        },{headers : {
          authorization: `Bearer ${Cookies.get("jwt")}`
        }});
        console.log(response);
      } catch (error) {
        alert(error.response.data.message)
        console.log(error);
      }
    }
  };

  return (
    <div className="w-11/12 h-4/5 flex flex-col">
      <MapContainer center={[30.176613488664007, 31.664954709701263]} zoom={10} style={{ height: '100%', width: '100%' }}>
      <TileLayer
  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"/>
        <FeatureGroup>
          <EditControl
            
            position='topright'
            onCreated={(e) => {
              handleSelection(e);
            }}
            onDeleted={()=>{
              setLatlungs([]);
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
      <div className="text-primaryColor w-full bg-white rounded-lg mt-2 p-2">
        <div className='flex flex-row w-full gap-4'>
        <button onClick={sendLocation} className="cursor-pointer no-underline flex flex-row gap-2 font-semibold text-center py-3 px-16 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none">Send For Detection</button>
        <button onClick={clearSelection} className="cursor-pointer no-underline flex flex-row gap-2 font-semibold text-center py-3 px-16 bg-gradient-to-r from-[#ff0000] to-[#ff0000] text-white rounded-lg outline-none border-none">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
