import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from '@emotion/styled';

const MapWrapper = styled.div`
  width: 100%;
  height: 100vh;
  
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;

// Component to handle map initialization
const MapController = () => {
  const map = useMap();
  
  React.useEffect(() => {
    map.setView([45.5017, -73.5673], 11); // Montreal coordinates
  }, [map]);

  return null;
};

const MontrealMap = () => {
  return (
    <MapWrapper>
      <MapContainer
        center={[45.5017, -73.5673]}
        zoom={11}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController />
      </MapContainer>
    </MapWrapper>
  );
};

export default MontrealMap; 