import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL}></img>
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
        <li>Cart</li>
      </ul>
    </div>
  );
};
export default HeaderComponent;
