import {
  CartItemsContainer,
  Image,
  ItemDetails,
  Name,
} from "./cart-item-styles";

const CartItem = ({ cartitem }: any) => {
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
