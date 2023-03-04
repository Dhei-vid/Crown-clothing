import { useSelector, useDispatch } from "react-redux";
import { FC } from "react";

import { CategoryItem } from "../../store/categories/category.types";
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

export type Products = {
  products: CategoryItem;
};

const ProductCard: FC<Products> = ({ products }) => {
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
