import CategoryItem from "../category-item/category-item";
import "./categories-dir.scss";

const CategoryDirectory = ({ categories }) => {
  return (
    <div className="categories--container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryDirectory;
