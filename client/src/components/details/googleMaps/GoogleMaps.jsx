import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};
//42.18986125621023, 23.283539283698673
const options = {
  mapTypeId: 'satellite',
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'on' }]
    }
  ]
};

function MyComponent(hike) {
  console.log(hike.lat)
  console.log(hike.lng)

  const latitude = isFinite(hike.lat) ? parseFloat(hike.lat) : 0;
  const longitude = isFinite(hike.lng) ? parseFloat(hike.lng) : 0;
  const center = {
    lat: latitude,
    lng: longitude
  };
  
  return (
    <LoadScript googleMapsApiKey="AIzaSyDE4jLWYnfg1BfHql6ffuvLOj3pCIQ1Mho">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        options={options}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent);