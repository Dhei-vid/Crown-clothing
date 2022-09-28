import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./category-styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <div>
        <h2>{category.toUpperCase()}</h2>
      </div>
      <div className="category-container">
        {
          // this is a safe guard built so the code does not run unless products evaluates to true
          // Good practice for when you have data that runs asynchronously
          products &&
            products.map((prod) => (
              <ProductCard key={prod.id} products={prod} />
            ))
        }
      </div>
    </>
  );
};

export default Category;
