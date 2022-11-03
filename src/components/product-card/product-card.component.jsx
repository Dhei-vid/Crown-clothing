// import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

// import { CartContext } from "../../context/cartContext";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCart } from "../../store/cart/cart.selectors";

import { button_type_classes } from "../button/button-component";
import {
  ProductCardContainer,
  Image,
  Name,
  OpaqueButton,
  Footer,
  Price,
} from "./product-card.style.jsx";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = products;
  const cartItems = useSelector(selectCart);

  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItems, products));

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt="product" />
      <Footer>
        <Name> {name} </Name>
        <Price as="span"> ${price} </Price>
      </Footer>

      <OpaqueButton
        button_type={button_type_classes.inverted}
        onClick={addItemToCartHandler}
      >
        Add To Cart
      </OpaqueButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
