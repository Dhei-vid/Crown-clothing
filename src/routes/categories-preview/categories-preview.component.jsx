import { useContext } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.components";
import { CategoriesContext } from "../../context/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    /* this empty tag is a shorthand for fragment 
    <></>
    */
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
