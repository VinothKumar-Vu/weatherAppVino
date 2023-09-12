import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Widgetstyles/map.css';

const Map = ({ data }) => {
  const [center,setCenter] = useState({ lng: data.coord.lon, lat: data.coord.lat });

  useEffect(() => {
      setCenter({ lng: data.coord.lon, lat: data.coord.lat });
  }, [data]);

  return (
    <div className='radar'>
      <header className='header-radar'>Radar: {data.name}</header>
      <MapContainer key={center.lng + center.lat} center={center} zoom={13} scrollWheelZoom={false}  style={{ width: "100%", height: "75%", marginTop: '10px', borderRadius: '6px'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
