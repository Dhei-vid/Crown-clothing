import React from "react";
import { useSelector } from "react-redux";

import { selectCart } from "../../store/cart/cart.selectors";
import { selectCartTotal } from "../../store/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const CheckOut = () => {
  const cartItems = useSelector(selectCart);
  const total = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((items) => (
        <CheckoutItem key={items.id} cartItem={items} />
      ))}

      <Total as="span">total: ${total}</Total>
    </CheckoutContainer>
  );
};

export default CheckOut;
