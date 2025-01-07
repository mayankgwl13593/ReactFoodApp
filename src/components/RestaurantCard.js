const ReastaurantCardomponent = (props) => {
  const restaurant = props.restaurantObj;
  const { cloudinaryImageId, name, cuisines, avgRating } = restaurant;
  return (
    <div className="card">
      <img
        className="food-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} ⭐️</h5>
    </div>
  );
};

export default ReastaurantCardomponent;
