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
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem, reduce, increase, deleteItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  const removeItemHandler = () => reduce(cartItem);
  const addItemHandler = () => increase(cartItem);
  const clearItemHandler = () => deleteItem(cartItem);

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
};

export default CheckoutItem;
