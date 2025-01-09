import ReastaurantCardomponent from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerComponent from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router";

let restaurantList = [];
const DashboardComponent = () => {
  const [restaurants, setrestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    restaurantList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setrestaurants(restaurantList);
  };

  searchRestaurant = (e) => {
    const filterRestarants = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setrestaurants(filterRestarants);
  };

  return restaurants.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="dashboard">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          maxLength="200"
          onChange={searchRestaurant}
        />
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <ReastaurantCardomponent restaurantObj={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardComponent;
