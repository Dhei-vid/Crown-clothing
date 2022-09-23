import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import "./checkout.styles.scss";

// const increase = document.querySelector(".increase");
// const qtyValue = document.querySelector(".qty");

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      {cartItems.map((items) => {
        const { id, name, imageUrl, price, quantity } = items;

        return (
          <div key={id}>
            <img src={imageUrl} alt="added product to cart" />
            <h1>{name} </h1>

            <div className="counter">
              <span className="decrease"></span>
              <span className="qty"> {quantity} </span>
              <span className="increase"></span>
            </div>

            <h4> ${price * quantity} </h4>
          </div>
        );
      })}
    </div>
  );
};

export default CheckOut;
