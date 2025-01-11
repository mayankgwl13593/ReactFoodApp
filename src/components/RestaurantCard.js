import { CDN_URL } from "../utils/constants";

const ReastaurantCardomponent = ({ restaurantObj, setHoverRestaurant }) => {
  const restaurant = restaurantObj;
  const { cloudinaryImageId, name, cuisines, avgRating } = restaurant;

  const handleClick = () => {
    setHoverRestaurant(name);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img className="food-logo" src={`${CDN_URL}${cloudinaryImageId}`}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} ⭐️</h5>
    </div>
  );
};

export const withisOpen = (ReastaurantCardomponent) => {
  return (props) => {
    return (
      <div>
        <label>Open</label>
        <ReastaurantCardomponent {...props} />
      </div>
    );
  };
};

export default ReastaurantCardomponent;
