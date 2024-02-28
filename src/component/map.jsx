import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';

const MapComponent = () => {
  const [selectedArea, setSelectedArea] = useState([]);

  const handleSelection = (e) => {
    const bounds = e.layer.getBounds();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    setSelectedArea([[ne.lat, ne.lng], [sw.lat, sw.lng]]);
    console.log(selectedArea);
  };

  const clearSelection = () => {
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

  const copyLongitude = () => {
    if (selectedArea.length > 0) {
      const longitude = selectedArea[0][1];
      navigator.clipboard.writeText(longitude.toString())
        .then(() => {
          console.log('Longitude copied to clipboard:', longitude);
        })
        .catch((error) => {
          console.error('Error copying longitude to clipboard:', error);
        });
    }
  };

  return (
    <div className="w-11/12 h-4/5 flex flex-col">
      <MapContainer center={[30.176613488664007, 31.664954709701263]} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <FeatureGroup>
          <EditControl
            position='topright'
            onCreated={(e) => {
              handleSelection(e);
            }}
            draw={{
              rectangle: true,
              circle: false,
              circlemarker: false,
              marker: false,
            }}
          />
        </FeatureGroup>
      </MapContainer>
      <div className="text-primaryColor w-full bg-white rounded-lg mt-2 p-2">
        <p>Latitude: {selectedArea.length > 0 ? selectedArea[0][0] : ''}</p>
        <p>Longitude: {selectedArea.length > 0 ? selectedArea[0][1] : ''}</p>
        <div className='flex flex-row w-full gap-4'>
        <button onClick={copyLatitude} className="cursor-pointer no-underline flex flex-row gap-2 font-semibold text-center py-3 px-16 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none">Copy Latitude</button>
        <button onClick={copyLongitude} className="cursor-pointer no-underline flex flex-row gap-2 font-semibold text-center py-3 px-16 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none">Copy Longitude</button>
        <button onClick={clearSelection} className="cursor-pointer no-underline flex flex-row gap-2 font-semibold text-center py-3 px-16 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
