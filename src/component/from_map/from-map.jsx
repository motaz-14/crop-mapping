import { MapContainer, TileLayer,Polygon  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

function FromMap() {
  const { id } = useParams();
  
  const [assumption,setAssumption] = useState("");
  const [coordinates,setCordinates] = useState([]);
  const getAssumptionData = async ()=>{
    try {
      setCordinates([]);
      const response = await axios.get(`http://localhost:8080/api/assumption/${id}`, {
        headers: {
          authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      });
      console.log(response);
      setAssumption(response.data.assumption);
      if (response.data.assumption != null) {
        const coords = response.data.assumption.location.latlongs.map(element => [element.lat, element.lang]);
        console.log(coords);
        setCordinates(coords);
      }
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    async function fetchData() {
      
      await getAssumptionData();
    }
    fetchData();
  },[]);
  return (
   <>
   <div className="w-11/12 h-4/5 flex flex-col">
      <MapContainer center={ coordinates.length===0? [30.176613488664007, 31.664954709701263] : coordinates[0]} zoom={10} style={{ height: '100%', width: '100%' }}>
      <TileLayer
  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"/>
    
        <FeatureGroup>

          <EditControl
            position='topright'
            draw={{
              
              polygon: false,
              rectangle: false,
              circle: false,
              circlemarker: false,
              marker: false,
              polyline:false

            }}
          />
           <Polygon positions={coordinates} />
        </FeatureGroup>
      </MapContainer>
      <div className="text-primaryColor w-full bg-white rounded-lg mt-2 p-2 flex flex-col gap-5">
        <div>
          Status : <span className='text-primaryColor'>{assumption? assumption.status: "Pending"}</span>
        </div>
        <div>
          Seeds : <span className='text-primaryColor'>{assumption?assumption.farmerAssumption.name:"Pending"}</span>
        </div>
        <div>
          Ai resulte : <span className='text-primaryColor'>{assumption?assumption.ai_Assumption!=null?assumption.ai_Assumption.name : assumption.status : "Pending" }</span>
        </div>
      </div>
    </div>
   </>
  )
}

export default FromMap