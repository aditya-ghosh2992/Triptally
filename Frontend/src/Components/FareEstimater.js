import React, { useState,useEffect,useCallback} from 'react';

const FareEstimator = ({from,to,distance,duration,vehicle}) => {
  const [fuel, setFuel] = useState('');
  const [mileage, setMileage] = useState(''); 
  const [cost, setCost] = useState('');

  const calculateCostFunction = useCallback((fuelPrice, mileageValue) => {
    const distanceValue = parseFloat(distance.replace(/[^0-9.]/g, ''));
    const totalCost = (distanceValue / mileageValue) * fuelPrice;
    return totalCost.toFixed(2);
  }, [distance]);

    useEffect(() => {
    if (vehicle === 'WALKING' || vehicle === 'BICYCLING') {
      setCost("0.00"); 
      setFuel("");
      setMileage("");
    } else {
      const calculatedCost = calculateCostFunction(parseFloat(fuel), parseFloat(mileage));
      setCost(calculatedCost);
    }
  }, [vehicle, fuel, mileage, distance,calculateCostFunction]);

  const handleCalculateCost = () => {
    if (vehicle === 'WALKING' || vehicle === 'BICYCLING') {
      setCost("0.00");
    } else {
      const calculatedCost = calculateCostFunction(parseFloat(fuel), parseFloat(mileage));
      setCost(calculatedCost);
    }
    setFuel("");
    setMileage("");
  };
  const isDisabled = vehicle === 'WALKING' || vehicle === 'BICYCLING';
  return (
    <section className="text-center h-fit">
      <h2 className="text-3xl font-bold">Your Estimated Fare:</h2>
      <div className="flex justify-center">
        <div className="bg-white p-6 rounded-lg w-full max-w-lg">
          <div className="flex mb-4">
            <input type="text" placeholder="From" value={from} disabled='true' className="p-2 rounded border w-1/2" />
            <input type="text" placeholder="To" value={to} disabled='true' className="p-2 rounded border w-1/2" />
           
          </div>
          <div className="flex mb-4">
            <input type="text" placeholder="Distance" value={distance} disabled='true'  className="p-2 rounded border w-1/3" />
            <input type="text" placeholder="Time" value={duration} disabled='true' className="p-2 rounded border w-1/3" />
            <input type="text" placeholder="Fuel Price" value={fuel}
            disabled={isDisabled}
            onChange={(e)=>setFuel(e.target.value)} className="p-2 rounded border w-1/3" />
          </div>
          <div className="flex mb-4">
            <input type="text" placeholder="Mileage in Km" value={mileage} 
            disabled={isDisabled}
            onChange={(e)=>setMileage(e.target.value)} className="p-2 rounded border w-full" />
          </div>
          <div className="flex">
            <input type="text" placeholder="Expected Cost" value={cost} disabled='true' className="p-2 rounded border w-1/2" />
            
            <button className="p-2 bg-yellow-500 text-white rounded w-1/2"
            onClick={handleCalculateCost}
            disabled={isDisabled}
            >Modify Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FareEstimator;
