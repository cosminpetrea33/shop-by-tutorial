import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { CartContext } from "../../contexts/cart.context";

import classes from "./checkout.module.scss";
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className={classes.checkoutContainer}>
      <div className={classes.checkoutHeader}>
        <div className={classes.headerBlock}>
          <span>Product</span>
        </div>
        <div className={classes.headerBlock}>
          <span>Description</span>
        </div>
        <div className={classes.headerBlock}>
          <span>Quantity</span>
        </div>
        <div className={classes.headerBlock}>
          <span>Price</span>
        </div>
        <div className={classes.headerBlock}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return (
          <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
        );
      })}
      <span className={classes.total}>Total: ${cartTotal}</span>
    </div>
  );
};
export default Checkout;
