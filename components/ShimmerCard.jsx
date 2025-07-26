import React from 'react';

const ShimmerCard = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 animate-pulse rounded-lg shadow-sm p-3 w-full max-w-[180px] h-[240px]"
        >
          <div className="w-full h-32 bg-gray-300 rounded mb-3"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-2/3"></div>
        </div>
      ))}
    </>
  );
};

export default ShimmerCard;
