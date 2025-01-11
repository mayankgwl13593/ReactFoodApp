import { useState, useEffect } from "react";
import { API_URL } from "./constants";

const useGetRestaurants = () => {
  const [restaurants, setrestaurants] = useState([]);
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    const restaurantList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setrestaurants(restaurantList);
  };

  return restaurants;
};
export default useGetRestaurants;
