import { useContext } from "react";
import { useSelector } from "react-redux";

import { CartContext } from "../../context/cartContext";
import { selectCartTotal } from "../../store/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const CheckOut = () => {
  const { cartItems, addItemToCart, removeItemFromCart, clearCartItem } =
    useContext(CartContext);

  const { total } = useSelector(selectCartTotal);

  // const { cartItems, addItemToCart, removeItemFromCart, clearCartItem, total } =
  //   useSelector(selectCartMap);

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
        <CheckoutItem
          key={items.id}
          cartItem={items}
          reduce={removeItemFromCart}
          increase={addItemToCart}
          deleteItem={clearCartItem}
        />
      ))}

      <Total as="span">total: ${total}</Total>
    </CheckoutContainer>
  );
};

export default CheckOut;
