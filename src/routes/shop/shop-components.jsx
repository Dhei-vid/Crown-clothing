import { useContext, Fragment } from "react";

import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    /* this empty tag is a shorthand for fragment */
    <>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products--container">
            {categoriesMap[title].map((prod) => (
              <ProductCard key={prod.id} products={prod} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Shop;
