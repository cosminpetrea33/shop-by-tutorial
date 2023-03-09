import { useContext } from "react";

import classes from "./CheckoutItem.module.scss";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const incrementItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  const clearItemHandler = () => deleteItemFromCart(cartItem);

  return (
    <div className={classes.checkoutItemContainer}>
      <div className={classes.imageContainer}>
        <img src={imageUrl} alt={`${name}`}></img>
      </div>
      <span className={classes.name}>{name}</span>
      <span className={classes.quantity}>
        <div className={classes.arrow} onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className={classes.value}>{quantity}</span>
        <div className={classes.arrow} onClick={incrementItemHandler}>
          &#10095;
        </div>
      </span>
      <span className={classes.price}>{price}</span>
      <div className={classes.removeButton} onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
