import React, { useRef, useState } from 'react';
import Nav from './Components/Nav';
import Header2 from './Components/Header2';
import FareEstimator from './Components/FareEstimater';
import MapSelection from './Components/MapSelection';
import PopularDestinations from './Components/PopularDestination';
import { useJsApiLoader, GoogleMap, Autocomplete, DirectionsRenderer, Marker } from "@react-google-maps/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const OwnPage = () => {
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [vehicle, setVehicle] = useState('');
  const originRef = useRef();
  const destinationRef = useRef();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  const getTravelMode = () => {
    switch (vehicle) {
      case 'BICYCLING':
        return window.google.maps.TravelMode.BICYCLING;
      case 'WALKING':
        return window.google.maps.TravelMode.WALKING;
      default:
        return window.google.maps.TravelMode.DRIVING;
    }
  };

  async function calculateRoute() {
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return;
    }
  
    const origin = originRef.current.getPlace();
    const destination = destinationRef.current.getPlace();
  
    if (!origin || !origin.formatted_address) {
      toast.error('Please enter a valid origin.');
      return;
    }
  
    if (!destination || !destination.formatted_address) {
      toast.error('Please enter a valid destination.');
      return;
    }
  
    const directionsService = new window.google.maps.DirectionsService();
    const request = {
      origin: origin.formatted_address,
      destination: destination.formatted_address,
      travelMode: getTravelMode(),
    };
  
    try {
      const response = await directionsService.route(request);
  
      if (response.status === 'OK') {
        setDirectionsResponse(response);
        setDistance(response.routes[0].legs[0].distance.text);
        setDuration(response.routes[0].legs[0].duration.text);
      } else if (response.status === 'ZERO_RESULTS') {
        toast.error('No route found. Please try again with different locations.');
        setDirectionsResponse(null);
        setDistance('');
        setDuration('');
      } else {
        toast.error('Error fetching directions. Please try again later.');
        console.error('Directions request failed:', response);
      }
    } catch (error) {
      toast.error('No Directions found. Please try again with different locations');
      console.error('Directions request failed:', error);
    }
  }

  return (
    <div>
      <ToastContainer 
      position="bottom-center"
      />
      <Nav color='#F0E5FD'/>
      <div className="h-fit w-full bg-gradient-to-b from-[#F0E5FD] via-pink-300 to-red-300 text-gray-800">
        <Header2 
          Autocomplete={Autocomplete}
          originRef={originRef}
          destinationRef={destinationRef}
          calculateRoute={calculateRoute}
          from={from}
          setFrom={setFrom}
          to={to}
          setTo={setTo}
          vehicle={vehicle}
          setVehicle={setVehicle}
        />
        <FareEstimator 
          distance={distance}
          duration={duration}
          from={from}
          setFrom={setFrom}
          to={to}
          vehicle={vehicle}
        />
        <MapSelection 
          map={map}
          setMap={setMap}
          GoogleMap={GoogleMap} 
          directionsResponse={directionsResponse} 
          DirectionsRenderer={DirectionsRenderer}
          Marker={Marker}
        />
        <PopularDestinations />
      </div>
    </div>
  );
}

export default OwnPage;
