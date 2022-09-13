import SHOP_DATA from "../../shop-data.json";

const Shop = () => {
  return (
    <div>
      {SHOP_DATA.map(({ id, price, name, imageUrl }) => {
        return (
          <div key={id}>
            <h1>{name}</h1>
            <img src={`${imageUrl}`} alt="images" />
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
