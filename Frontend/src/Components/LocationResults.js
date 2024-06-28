import React from 'react';
import LocationCard from './LocationCard';
const LocationResults = (responses) => {
  const data = responses.responses;
  return (
    <section className="text-center py-10">
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data !=null && data.map((location) => (
          <LocationCard
            name={location.name}
            image={location.imgurl}
            rating={location.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default LocationResults;
