import React from 'react';

const LocationCard = ({ image, name, rating}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <div className="mt-2">
        <span className="text-yellow-500">★ {rating}</span>
      </div>
    </div>
  );
};

export default LocationCard;