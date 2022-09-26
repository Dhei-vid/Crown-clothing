import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, reduce, increase }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="added product to cart" />
      </div>
      <span className="name">{name} </span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduce(cartItem)}>
          &lt;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => increase(cartItem)}>
          &gt;
        </div>
      </span>
      <span className="price"> ${price} </span>
      <span className="remove-button">&#10005;</span>
    </div>
  );
};

export default CheckoutItem;
