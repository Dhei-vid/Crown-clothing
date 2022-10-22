import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoryMap } from "../../store/categories/category.selectors";

import { CategoryContainer } from "./category-styles";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoryMap);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <div>
        <h2>{category.toUpperCase()}</h2>
      </div>
      <CategoryContainer>
        {
          // this is a safe guard built so the code does not run unless products evaluates to true
          // Good practice for when you have data that runs asynchronously
          products &&
            products.map((prod) => (
              <ProductCard key={prod.id} products={prod} />
            ))
        }
      </CategoryContainer>
    </>
  );
};

export default Category;
