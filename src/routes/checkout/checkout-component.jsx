import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="Checkmark">
      {cartItems.map((items) => {
        return (
          <div key={items.id}>
            <img src={items.imageUrl} alt="added product to cart" />
            <h1>{items.name} </h1>
            <h3> {items.quantity} </h3>
            <h4> {items.price} </h4>
          </div>
        );
      })}
    </div>
  );
};

export default CheckOut;
