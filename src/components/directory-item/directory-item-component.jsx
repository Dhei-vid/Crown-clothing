import {
  DirectoryItemContainer,
  DirectoryItemBody,
  BackgroundImage,
  Header,
  Paragraph,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <DirectoryItemBody>
        <Header> {title} </Header>
        <Paragraph> Shop now </Paragraph>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
