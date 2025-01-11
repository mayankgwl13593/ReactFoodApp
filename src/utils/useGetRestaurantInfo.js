import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useGetRestaurantInfo = (resId) => {
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

  return {
    restaurantInfo,
    menuList,
  };
};
export default useGetRestaurantInfo;
