import { useContext } from "react";
import { useSelector } from "react-redux";

import { CartContext } from "../../context/cartContext";

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
  const { name, price, imageUrl } = products;
  // const { addItemToCart } = useContext(CartContext);
  const { addItemToCart } = useSelector(CartContext);

  const addItemToCartHandler = () => {
    addItemToCart(products);
  };

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
