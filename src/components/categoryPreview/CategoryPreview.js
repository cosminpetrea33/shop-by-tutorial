import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card";
import classes from "./CategoryPreview.module.scss";
const CategoryPreview = ({ title, products }) => {
  return (
    <div className={classes.categoryPreviewContainer}>
      <h2>
        <Link to={title}>
          {" "}
          <span className={classes.title}>{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className={classes.preview}>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </div>
  );
};
export default CategoryPreview;
