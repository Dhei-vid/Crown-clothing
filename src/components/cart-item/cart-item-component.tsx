import { FC } from "react";
import { CartItem } from "../../store/cart/cart.types";
import {
  CartItemsContainer,
  Image,
  ItemDetails,
  Name,
} from "./cart-item-styles";

export type CartItemComp = {
  cartitem: CartItem;
};

const CartItem: FC<CartItemComp> = ({ cartitem }) => {
  const { name, quantity, imageUrl, price } = cartitem;
  return (
    <CartItemsContainer>
      <Image src={imageUrl} alt="product item" />
      <ItemDetails>
        <Name as="span"> {name} </Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemsContainer>
  );
};

export default CartItem;
