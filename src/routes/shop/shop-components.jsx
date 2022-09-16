import { useContext } from "react";

import { ProductContext } from "../../context/productContext";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products--container">
      {products.map((prod) => (
        <ProductCard key={prod.id} products={prod} />
      ))}
    </div>
  );
};

export default Shop;
