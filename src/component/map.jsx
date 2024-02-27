import React, { useState } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';

const ShapeDetails = ({ shape, index, onDelete }) => (
  <div className='text-primaryColor'>
    <p>Shape {index + 1}:</p>
    <p>Type: {shape.type}</p>
    <p>Coordinates:</p>
    <ul>
      {shape.coordinates.map((coordinate, idx) => (
        <li key={idx}>Latitude: {coordinate[0]}, Longitude: {coordinate[1]}</li>
      ))}
    </ul>
    <button
      className='cursor-pointer no-underline flex flex-row gap-2 font-semibold text-center py-3 px-16 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none'
      onClick={() => onDelete(index)}
    >
      Delete
    </button>
  </div>
);

const MapComponent = () => {
  const [shapes, setShapes] = useState([]);
  const [currentShape, setCurrentShape] = useState(null);

  const handleSelection = (e) => {
    const bounds = e.layer.getBounds();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    const newShape = {
      type: e.layerType,
      coordinates: [[ne.lat, ne.lng], [sw.lat, sw.lng]]
    };
    setCurrentShape(newShape);
  };

  const handleEdit = (e) => {
    const editedShape = e.layers.toGeoJSON().features.map(feature => {
      return {
        type: feature.geometry.type,
        coordinates: feature.geometry.coordinates[0].map(coord => [coord[1], coord[0]])
      };
    });
    setShapes(editedShape);
    setCurrentShape(null);
  };

  const handleDelete = (index) => {
    const updatedShapes = shapes.filter((_, i) => i !== index);
    setShapes(updatedShapes);
  };

  const handleSaveShape = () => {
    if (currentShape) {
      setShapes([...shapes, currentShape]);
      setCurrentShape(null);
    }
  };

  return (
    <div className="w-11/12 h-4/5 flex flex-col">
      <MapContainer center={[29.31518383080754, 30.599214539284482]} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <FeatureGroup>
          <EditControl
            position='topright'
            onCreated={handleSelection}
            onEdited={handleEdit}
            draw={{
              rectangle: false,
              circle: false,
              circlemarker: false,
              marker: false,
            }}
          />
          {shapes.map((shape, index) => (
            <Polygon key={index} positions={shape.coordinates}>
              <EditControl
                position='topright'
                onEdited={handleEdit}
                draw={{
                  edit: {
                    featureGroup: FeatureGroup,
                    edit: true,
                    remove: true
                  }
                }}
              />
            </Polygon>
          ))}
        </FeatureGroup>
      </MapContainer>
      {/* Render shape details */}
      {currentShape && (
        <ShapeDetails shape={currentShape} index={shapes.length} onDelete={() => setCurrentShape(null)} />
      )}
      {shapes.map((shape, index) => (
        <ShapeDetails key={index} shape={shape} index={index} onDelete={() => handleDelete(index)} />
      ))}
      {/* Button to save current shape */}
      {currentShape && (
        <div className="p-4 bg-white">
          <button
            className='cursor-pointer no-underline flex flex-row gap-2 font-semibold text-center py-3 px-16 bg-gradient-to-r from-[#01E5B2] to-[#01B68D] text-white rounded-lg outline-none border-none'
            onClick={handleSaveShape}
          >
            Save Current Shape
          </button>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
