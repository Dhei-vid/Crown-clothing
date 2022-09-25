import "./checkout-item.styles.scss";

// addItemToCart, removeItemFromCart
// onClick={() => removeItemFromCart(items)}
// onClick={() => addItemToCart(items)}
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  console.log(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="added product to cart" />
      </div>
      <span className="name">{name} </span>
      <span className="decrease"></span>
      <span className="quantity"> {quantity} </span>
      <span className="increase"></span>

      <span className="price"> ${price} </span>
    </div>
  );
};

export default CheckoutItem;
