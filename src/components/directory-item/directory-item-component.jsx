import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  DirectoryItemBody,
  BackgroundImage,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
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

/**
 * Return the original CSS styles but commented
 */
