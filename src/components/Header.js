import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL}></img>
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Orders</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
export default HeaderComponent;
