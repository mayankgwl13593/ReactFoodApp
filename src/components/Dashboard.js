import useGetRestaurants from "../utils/useGetRestaurants";
import ReastaurantCardomponent, { withisOpen } from "./RestaurantCard";
import ShimmerComponent from "./Shimmer";
import { Link } from "react-router";
import useGetRestaurants from "../utils/useGetRestaurants";
import { useState, useEffect } from "react";

const DashboardComponent = () => {
  const restaurants = useGetRestaurants();
  const [restaurantList, setRestaurantList] = useState([]);

  const ReastaurantCardWithOpenomponent = withisOpen(ReastaurantCardomponent);

  useEffect(() => {
    setRestaurantList(restaurants);
  }, [restaurants]);

  searchRestaurant = (e) => {
    const filterRestarants = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRestaurantList(filterRestarants);
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
        {restaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {
              /* {restaurant.info.isOpen === false ? (
              <ReastaurantCardWithOpenomponent
                restaurantObj={restaurant.info}
              />
            ) : (
              <ReastaurantCardomponent
                restaurantObj={restaurant.info}
                setHoverRestaurant={(data) =>
                  console.log("Lifting state up", data)
                }
              />
            )}
            <ReastaurantCardWithOpenomponent restaurantObj={restaurant.info} /> */
              <ReastaurantCardomponent
                restaurantObj={restaurant.info}
                setHoverRestaurant={(data) =>
                  console.log("Lifting state up", data)
                }
              />
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardComponent;
