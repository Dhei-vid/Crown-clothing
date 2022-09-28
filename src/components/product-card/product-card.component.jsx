import { useContext } from "react";

import { CartContext } from "../../context/cartContext";

import Button from "../button/button-component";
import {
  ProductCardContainer,
  Image,
  ButtonStyle,
  Name,
  Footer,
  Price,
} from "./product-card.style.jsx";

const ProductCard = ({ products }) => {
  const { name, price, imageUrl } = products;
  const { addItemToCart } = useContext(CartContext);

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

      <Button button_type="inverted" onClick={addItemToCartHandler}>
        Add To Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
