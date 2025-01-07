import { CDN_URL } from "../utils/constants";

const ReastaurantCardomponent = (props) => {
  const restaurant = props.restaurantObj;
  const { cloudinaryImageId, name, cuisines, avgRating } = restaurant;
  return (
    <div className="card">
      <img className="food-logo" src={`${CDN_URL}${cloudinaryImageId}`}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} ⭐️</h5>
    </div>
  );
};

export default ReastaurantCardomponent;
