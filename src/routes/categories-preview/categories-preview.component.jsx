import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.components";
import { selectCategoryMap } from "../../store/categories/category.selectors";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoryMap);

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
