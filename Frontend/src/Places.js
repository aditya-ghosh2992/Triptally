import React, { useState} from 'react'
import Nav from './Components/Nav'
import Header from './Components/Header3'
import LocationResults from './Components/LocationResults'
import PopularDestinations from './Components/PopularDestination'
import axios from 'axios'
const Places = () => {
  const [responses,Setresponses] = useState([]);
  const [query,setQuery] = useState("");
  const [destination,setDestination] = useState("");
  const [type,setType] = useState("");
  const clickHandler = async()=>{
    try {
      const response = await axios.get(`https://ashank007.github.io/TripTallyApi/${type}/${query}.json`);
      Setresponses(response.data);
      const destination = await axios.get(`https://ashank007.github.io/TripTallyApi/famousplaces/${query}.json`);
      setDestination(destination.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
        <Nav color='white'/>
        <div className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 text-gray-800">
      <Header query={query} setQuery={setQuery} clickHandler={clickHandler}
      type={type} setType = {setType} 
      />
      <LocationResults responses={responses} type={type} />
      <PopularDestinations destination = {destination}/>
    </div>
    </div>
  )
}

export default Places