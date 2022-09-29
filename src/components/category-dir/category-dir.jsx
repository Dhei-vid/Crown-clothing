import DirectoryItem from "../directory-item/directory-item-component";
import { CategoriesContainer } from "./categories-dir.jsx";

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
