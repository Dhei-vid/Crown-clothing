import Button from "../button/button-component";

const ProductCard = () => {
  return (
    <div className="product-card-container">
      <img src="" alt="product image" />
      <div className="footer">
        <span></span>
        <span></span>
      </div>
      <Button button_type={inverted}> Add To Cart</Button>
    </div>
  );
};

export default ProductCard;
