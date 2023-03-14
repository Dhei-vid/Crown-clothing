import { FC, memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCart } from "../../store/cart/cart.selectors";

import { CartItem } from "../../store/cart/cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  clearCartItem,
} from "../../store/cart/cart.action";
import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

type CheckOutItem = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckOutItem> = memo(({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const clearItemHandler = () => dispatch(clearCartItem(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="added product to cart" />
      </ImageContainer>
      <Name as="span">{name} </Name>
      <Quantity as="span">
        <Arrow onClick={removeItemHandler}>&lt;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&gt;</Arrow>
      </Quantity>
      <Price as="span"> ${price * quantity} </Price>
      <RemoveButton as="span" onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;
