import React from "react";
import { useSelector } from "react-redux";

import {
  selectCategoryMap,
  selectCategoriesisLoading,
} from "../../store/categories/category.selectors";

import Spinner from "../../components/spinner/spinner.component";
import CategoryPreview from "../../components/category-preview/category-preview.components";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoryMap);
  const isLoading = useSelector(selectCategoriesisLoading);

  return (
    /* this empty tag is a shorthand for fragment 
    <></>
    */
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} products={products} title={title} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
