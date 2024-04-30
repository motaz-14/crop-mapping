import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRef } from 'react';

const MapComponent = () => {
  const [selectedArea, setSelectedArea] = useState([]);
  const [latlungs,setLatlungs] = useState([]);
  const [prediction,setPrediction] = useState();
  const  [loading , setLoading ] = useState(false);
  const featureGroupRef = useRef();

  const handleSelection = (e) => {
    const bounds = e.layer.getBounds();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    setLatlungs(e.layer._latlngs[0]);
    setSelectedArea([[ne.lat, ne.lng], [sw.lat, sw.lng]]); 
  };

  const clearSelection = () => {
    
    const featureGroup = featureGroupRef.current;
    if (featureGroup && featureGroup.leafletElement) {
      featureGroup.leafletElement.clearLayers();
      
    }
    setLatlungs([]);
    setSelectedArea([]);
    setPrediction();
  };


  const sendLocation = async () => {
    if (latlungs.length > 0) {
      console.log(latlungs);
      try {
        setLoading(true);
        const response  = await axios.post("http://localhost:8080/api/prediction/",{
          points : latlungs
        },{headers : {
          authorization: `Bearer ${Cookies.get("jwt")}`
        }});
        console.log(response);
        setPrediction( response.data.prediction.most_frequent_class_label);
        setLoading(false)
      } catch (error) {
        alert(error.response.data.message)
        setLoading(false);
        console.log(error);
      }
    }
  };

  return (
     
        <div className="w-full h-4/5 flex flex-col">
          <div className='flex h-full w-full gap-3'>
          <MapContainer center={[30.176613488664007, 31.664954709701263]} zoom={10} style={{ height: '100%', width: '100%' }}>
          <TileLayer
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"/>
            <FeatureGroup ref={featureGroupRef}>
              <EditControl
                
                position='topright'
                onCreated={(e) => {
                  handleSelection(e);
                }}
                
                onDeleted={()=>{
                  clearSelection();
                }}
                
                onDeleteStart={clearSelection}
                onDeleteStop={clearSelection}
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
          <div class='flex flex-col bg-gray-100 text-gray-900 w-max text-nowrap p-5 shadow-lg'>
              <h3 class="text-lg font-bold mb-2">Selected Area:</h3>
              {latlungs.length > 0 ? latlungs.slice(0,5).map(a=>{ return <p class="mb-4">[{a.lat} , {a.lng}]</p> } ): "No Area Selected yet"}
              {latlungs.length > 5 ?  <p class="mb-4">{latlungs.length - 5} more  .......</p> : "" }
              <h3 class="text-lg font-bold mb-2">Detected Plant:</h3>
              <p>  {  !loading?   prediction!=null? prediction : "No Crop Detected" :  <div className="flex justify-center items-center">
      <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>}</p>
          </div>
          </div>
            <div className="text-primaryColor w-full bg-white rounded-lg mt-2 p-2">
              <div className='flex flex-row w-11/12 gap-4'>
              <button onClick={sendLocation} className="cursor-pointer no-underline flex flex-row gap-2 font-semibold text-center py-3 px-16 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none">Send For Detection</button>
              <button onClick={clearSelection} className="cursor-pointer no-underline flex flex-row gap-2 font-semibold text-center py-3 px-16 bg-gradient-to-r from-[#ff0000] to-[#ff0000] text-white rounded-lg outline-none border-none">Delete</button>
              </div>
            </div>
          
          </div>
         
     
   
  );
};

export default MapComponent;
