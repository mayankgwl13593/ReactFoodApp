import { useDispatch, useSelector } from "react-redux";
import { addItems, clearItems, removeItem } from "../utils/store/cartSlice";

const CartComponent = () => {
  const getCartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(clearItems());
  };
  const addItem = (item) => {
    dispatch(addItems(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div>
      <b>Cart:</b>
      {getCartItems.length ? (
        <button onClick={clearCart}>Clear cart</button>
      ) : null}
      {getCartItems.map((item, index) => (
        <div style={{ display: "flex", padding: "5px" }} key={index}>
          <button onClick={() => addItem(item)}>+</button>
          <p style={{ margin: "0px 5px" }}>{item}</p>
          <button onClick={() => removeItemFromCart(item)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default CartComponent;
