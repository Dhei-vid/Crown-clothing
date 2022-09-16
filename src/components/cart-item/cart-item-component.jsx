import "./cart-item-styles.scss";

const CartItem = ({ cartitem }) => {
  const { name, quantity } = cartitem;
  return (
    <div>
      <h1> {name} </h1>
      <span> {quantity} </span>
    </div>
  );
};

export default CartItem;
