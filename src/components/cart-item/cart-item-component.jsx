import "./cart-item-styles.scss";

const CartItem = ({ cartitem }) => {
  const { name, quantity, imageUrl, price } = cartitem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt="product item" />
      <div className="item-details">
        <span className="name"> {name} </span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
