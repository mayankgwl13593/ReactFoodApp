import ReastaurantCardomponent from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const DashboardComponent = () => {
  return (
    <div className="dashboard">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          maxLength="200"
        />
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <ReastaurantCardomponent
            key={restaurant.info.id}
            restaurantObj={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardComponent;
