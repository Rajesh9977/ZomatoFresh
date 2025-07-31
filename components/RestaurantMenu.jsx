import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9611159&lng=77.6362214&restaurantId=${resId}`
      );
      const json = await data.json();
      console.log("Menu JSON:", json);

      // Extract restaurant info
      const resInfo = json?.data?.cards?.find(
        (c) => c.card?.card?.info
      )?.card.card.info;

      // Extract menu items
      const items =
        json?.data?.cards
          ?.find((c) => c.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c) => c.card?.card?.itemCards
          )
          .flatMap((c) => c.card.card.itemCards)
          .map((item) => item.card.info) || [];

      setRestaurant(resInfo);
      setMenuItems(items);
    } catch (err) {
      console.error("❌ Menu Fetch Failed:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-4 text-lg">Loading menu...</div>;

  if (!restaurant) return <div className="p-4 text-red-500">Restaurant not found.</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-2">{restaurant.name}</h1>
      <p className="text-gray-600 mb-4">{restaurant.cuisines?.join(", ")}</p>
      <p className="text-gray-500 mb-6">📍 {restaurant.areaName}, {restaurant.city}</p>

      <h2 className="text-xl font-semibold mb-4 text-green-600">🍽️ Menu</h2>
      <ul className="space-y-3">
        {menuItems.length === 0 ? (
          <p>No items found in menu.</p>
        ) : (
          menuItems.map((item) => (
            <li
              key={item.id}
              className="border-b pb-2 flex justify-between items-center"
            >
              <span className="text-md font-medium">{item.name}</span>
              <span className="text-sm text-gray-600">
                ₹{item.price / 100 || item.defaultPrice / 100 || "N/A"}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
