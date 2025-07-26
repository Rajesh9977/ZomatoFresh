import React from 'react';

const RestaurantCard = ({ name, cuisines, areaName, avgRating, sla, cloudinaryImageId }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 w-full max-w-[180px] hover:shadow-md transition text-sm">
      <div className="w-full h-32 mb-2 rounded-md overflow-hidden flex items-center justify-center bg-gray-100">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
          alt={`${name} thumbnail`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="font-semibold text-gray-800 truncate">{name}</div>
      <div className="text-gray-500 text-xs truncate">{cuisines?.join(', ')}</div>
      <div className="text-gray-500 text-xs truncate">{areaName}</div>
      <div className="flex justify-between items-center mt-2 text-xs">
        <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">
          ⭐ {avgRating}
        </span>
        <span>{sla?.slaString}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
