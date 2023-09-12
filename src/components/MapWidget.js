import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './Widgetstyles/map.css';

const Map = ({ data }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const cityCoord = { lng: data.coord.lon, lat: data.coord.lat };
  const [zoom] = useState(13);
  maptilersdk.config.apiKey = '2JzcdaIQ5UcTJRx5tDAe';

  useEffect(() => {
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [cityCoord.lng, cityCoord.lat],
      zoom: zoom,
      geolocateControl: false
    });

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([data.coord.lon, data.coord.lat])
      .addTo(map.current);
  }, [data.coord.lon, data.coord.lat, cityCoord.lng, cityCoord.lat, zoom]);

  return (
    <div className='radar'>
      <header className="header-radar">Radar: {data.city}</header>
      <div className='map-wrap'>
        <div ref={mapContainer} className='map' />
      </div>
    </div >
  );
}

export default Map;
