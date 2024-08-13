import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { extractCoordinates } from '../../../util';

const containerStyle = {
  width: '100%',
  height: '500px'
};



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

function MyComponent({ location }) {
  if (!location) {
    return
  }

  // console.log(place)
  const place = extractCoordinates(location)
  const latitude = isFinite(place.lat) ? parseFloat(place.lat) : 0;
  const longitude = isFinite(place.lng) ? parseFloat(place.lng) : 0;
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