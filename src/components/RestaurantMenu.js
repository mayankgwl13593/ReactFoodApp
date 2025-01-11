import { useParams } from "react-router";
import ShimmerComponent from "./Shimmer";
import useGetRestaurantInfo from "../utils/useGetRestaurantInfo";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/store/cartSlice";

const RestaurantMenuComponent = () => {
  const { resId } = useParams();
  const { restaurantInfo, menuList } = useGetRestaurantInfo(resId);
  const dispatch = useDispatch();
  const addTocart = (dish) => {
    dispatch(addItems(dish));
  };

  if (!restaurantInfo) {
    return <ShimmerComponent />;
  }
  return (
    <div className="restaurant-menu">
      <div className="restaurant-header">
        <h2>{restaurantInfo.name}</h2>
        <i>
          {restaurantInfo.cuisines.join(", ")} - {restaurantInfo.avgRating} (
          {restaurantInfo.totalRatingsString})
        </i>
      </div>
      <h3>Menu</h3>
      {menuList?.map((res) => (
        <div style={{ dislay: "flex", padding: "5px" }} key={res.card.info.id}>
          <img
            style={{
              width: "75px",
              borderRadius: "50%",
            }}
            src={CDN_URL + res.card.info.imageId}
          />
          <span
            style={{
              alignItems: "center",
            }}
            key={res.card.info.id}
          >
            {res.card.info.name}
          </span>
          <button
            style={{
              padding: "5px",
              margin: "0px 5px",
              backgroundColor: "#ffc286",
              cursor: "pointer",
              border: "none",
              borderRadius: "10%",
            }}
            onClick={() => addTocart(res.card.info.name)}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
};
export default RestaurantMenuComponent;
