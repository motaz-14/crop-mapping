import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';

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

  const copyLatitude = () => {
    if (selectedArea.length > 0) {
      const latitude = selectedArea[0][0];
      navigator.clipboard.writeText(latitude.toString())
        .then(() => {
          console.log('Latitude copied to clipboard:', latitude);
        })
        .catch((error) => {
          console.error('Error copying latitude to clipboard:', error);
        });
    }
  };

  const sendLocation = () => {
    if (latlungs.length > 0) {
      console.log(latlungs);
    }
  };

  return (
    <div className="w-11/12 h-4/5 flex flex-col">
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
