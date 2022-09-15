import Button from "../button/button-component";
import "./product-card.style.scss";

const ProductCard = ({ products }) => {
  const { name, price, imageUrl } = products;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="product" />
      <div className="footer">
        <span className="name"> {name} </span>
        <span className="price"> {price} </span>
      </div>
      <Button button_type="inverted"> Add To Cart</Button>
    </div>
  );
};

export default ProductCard;
