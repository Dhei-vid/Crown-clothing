import { FC } from "react";
import ProductCard from "../product-card/product-card.component";
import { CategoryItem } from "../../store/categories/category.types";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

export type CategoryPreviewTypes = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewTypes> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((prod) => (
            <ProductCard key={prod.id} products={prod} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
