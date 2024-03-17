import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';

function FromMap() {
      
  return (
   <>
   <div className="w-11/12 h-4/5 flex flex-col">
      <MapContainer center={[30.176613488664007, 31.664954709701263]} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=9270635570mshce84b9ebfa3a04ep1de683jsnc813f569c7e2"
        />
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
        </FeatureGroup>
      </MapContainer>
      <div className="text-primaryColor w-full bg-white rounded-lg mt-2 p-2 flex flex-col gap-5">
        <div>
          Status : <span className='text-primaryColor'>Pending</span>
        </div>
        <div>
          Seeds : <span className='text-primaryColor'>Tomato</span>
        </div>
        <div>
          Ai resulte : <span className='text-primaryColor'>Pending</span>
        </div>
      </div>
    </div>
   </>
  )
}

export default FromMap