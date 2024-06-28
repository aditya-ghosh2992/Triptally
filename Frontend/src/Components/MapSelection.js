import React from 'react';

const MapSection = ({ map, setMap, GoogleMap, directionsResponse, DirectionsRenderer, Marker }) => {
  const center = {
    lat: 23.473324,
    lng: 80.010070,
  };

  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-bold">Map:</h2>
      <div className="mt-6 bg-gray-200 h-64 w-full max-w-4xl mx-auto rounded-lg shadow-md">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={center}
          zoom={4}
          options={{
            streetViewControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </div>
      <div className="mt-6 text-xl font-semibold">
        Guarantee Of the best Prediction!!!
      </div>
      <p className="mt-4 max-w-2xl mx-auto">
        We promise to calculate the expected cost of the trip whether it is your family trip or your solo ride.
      </p>
    </section>
  );
};

export default MapSection;
