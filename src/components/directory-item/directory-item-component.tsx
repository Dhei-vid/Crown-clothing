import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { CategoriesDirItem } from "../../store/categories/category.types";

import {
  DirectoryItemContainer,
  DirectoryItemBody,
  BackgroundImage,
} from "./directory-item.styles";

type CategoryComp = {
  category: CategoriesDirItem;
  routes: string;
};

const DirectoryItem: FC<CategoryComp> = ({ category }) => {
  const { title, imageUrl, routes } = category;
  const navigate = useNavigate();

  const onClickNavigate = () => navigate(routes);

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBody onClick={onClickNavigate}>
        <h2> {title} </h2>
        <p> Shop now </p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
