import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router";
import ShimmerComponent from "./Shimmer";
const RestaurantMenuComponent = () => {
  const { resId } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setRestaurantInfo(json.data?.cards[2]?.card?.card?.info);
    setMenuList(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
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
      {menuList.map((res) => (
        <li key={res.card.info.id}>{res.card.info.name}</li>
      ))}
    </div>
  );
};
export default RestaurantMenuComponent;
