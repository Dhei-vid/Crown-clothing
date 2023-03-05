import DirectoryItem from "../directory-item/directory-item-component";
import { CategoriesContainer } from "./category-dir.styles";
import { CategoriesDirItem } from "../../store/categories/category.types";

const categories: CategoriesDirItem[] = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    routes: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    routes: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    routes: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    routes: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    routes: "shop/mens",
  },
];

const CategoryDirectory = () => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <DirectoryItem
          key={category.id}
          category={category}
          routes={category.routes}
        />
      ))}
    </CategoriesContainer>
  );
};

export default CategoryDirectory;
