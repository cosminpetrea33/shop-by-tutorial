import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import classes from "./product-card.module.scss";
import Button from "../Button/Button";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart(product);
  
  return (
    <div className={classes.productCardContainer}>
      <img src={imageUrl} alt={`${name}`}></img>
      <div className={classes.footer}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};
export default ProductCard;
