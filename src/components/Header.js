import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <img className="logo" src={LOGO_URL}></img>
      <p>LoggedIn User: {loggedInUser}</p>
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li style={{ fontWeight: "600", fontSize: "18px" }}>
          <Link to="/cart">Cart ({cartItems.length} items)</Link>
        </li>
      </ul>
    </div>
  );
};
export default HeaderComponent;
