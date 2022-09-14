import { ProductContext } from "../../context/productContext";
import { useContext } from "react";

const Shop = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div className="product-card-container">
      {products.map(({ id, name, imageUrl }) => {
        return (
          <div key={id}>
            <img src={`${imageUrl}`} alt="images" />
            <h1>{name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
