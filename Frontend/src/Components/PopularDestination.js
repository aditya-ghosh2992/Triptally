import React from 'react';

const PopularDestinations = ({ destination }) => {
  const data = destination;
  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-bold">Popular Destinations:</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.isArray(data) && data.map((index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <img src={index.imgurl} alt='error' className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-semibold">{index.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
