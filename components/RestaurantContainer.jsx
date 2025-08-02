import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import useOnlineStatus from '../utils/useOnlineStatus';

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

const RestaurantContainer = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showTopRated, setShowTopRated] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9611159&lng=77.6362214&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      let restaurantList = [];

      for (const card of json?.data?.cards || []) {
        const possibleList = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (possibleList) {
          restaurantList = possibleList;
          break;
        }
      }

      setAllRestaurants(restaurantList || []);
    } catch (err) {
      console.error("❌ Failed to fetch:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = () => {
    setShowTopRated((prev) => !prev);
  };

  const filteredRestaurants = allRestaurants
    .filter((r) =>
      r.info.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter((r) =>
      showTopRated ? parseFloat(r.info.avgRating) >= 4.5 : true
    );

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
      return(
    <h1>You are offline</h1>
    );

  return (
    <div className="p-4">
      {/* 🔍 Search and Filter */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded w-full max-w-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleFilter}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          {showTopRated ? 'Show All' : 'Show Top Rated'}
        </button>
      </div>

      {/* 🍽️ Restaurant List */}
      <div className="flex flex-wrap gap-4 justify-center">
        {loading ? (
          <ShimmerCard />
        ) : filteredRestaurants.length === 0 ? (
          <p className="text-red-500 text-lg">No restaurants found.</p>
        ) : (
          filteredRestaurants.map((res) => (
            <Link to={`/restaurant/${res.info.id}`} key={res.info.id}>
              <RestaurantCard {...res.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurantContainer;
