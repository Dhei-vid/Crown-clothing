import DirectoryItem from "../directory-item/directory-item-component";
import { CategoriesContainer } from "./category-dir.styles";

const CategoryDirectory = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default CategoryDirectory;
